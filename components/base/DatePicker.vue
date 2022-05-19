<template>
  <div class="container">
    <div class="input-wrapper">
      <input
        v-model="date"
        class="date-input"
        type="date"
        v-focus
        ref="date"
      />
      <base-calendar-days-table v-model="date" v-show="show" class="calendar-wrapper"></base-calendar-days-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMask from 'v-mask'
Vue.use(VueMask)
import { format } from 'date-fns'

export default {
  data: () => ({
    date: format(new Date(), 'yyyy-MM-dd'),
    show: true,
  }),
  methods: {
    showCalendar() {
      this.show = true
    },
    hideCalendar() {
      this.show = false 
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 600px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background: lightblue;
	font-size: 20px;
  .input-wrapper {
    position: relative;
    width: 128px;
    height: 50px;
    input[type='date'] {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      padding: 0.7rem;
      border-radius: 4px;
      border: 1px solid grey;
      height: 100%;
      width: 100%;
      &:focus-visible {
        border: 1px solid grey;
      }
    }
    input[type='date']::-webkit-inner-spin-button,
    input[type='date']::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }

    .calendar-wrapper {
      position: absolute;
			z-index: 1;
      left: 50%;
      transform: translateX(-50%);
      margin: 0 auto;
      top: 140%;
    }
  }
}
</style>
