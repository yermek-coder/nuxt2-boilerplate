<template>
  <transition :name="animationName" mode="out-in">
    <div :key="monthKey" class="grid">
      <div class="header">
        <p v-for="(day, i) in daysOfWeek" :key="i" class="week-item">
          {{ day }}
        </p>
      </div>
      <div class="days">
        <slot name="days"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { eachDayOfInterval, startOfWeek, endOfWeek, format } from 'date-fns'
import { ru } from 'date-fns/locale'

export default {
  props: {
    animationName: {
      type: String,
      required: true,
    },
    // days: {
    //   type: Array,
    //   required: true,
    // },
    monthKey: {
      type: String,
      required: true,
    },
  },
  computed: {
    daysOfWeek() {
      const now = new Date()
      const arr = eachDayOfInterval({
        start: startOfWeek(now, { weekStartsOn: 1 }),
        end: endOfWeek(now, { weekStartsOn: 1 }),
      })
      return arr.map((el) => format(el, 'EEEEE', { locale: ru }))
    },

  },
  methods: {
  	clickHandler(value) {
  		this.$emit('setDay', value)
  	}
  },
}
</script>

<style lang="scss" scoped>
.grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  .header {
    display: flex;
    justify-content: space-around;
    height: fit-content;
    font-weight: 800;
    color: $secondary;
  }
  .days {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr;

  }
}
</style>
