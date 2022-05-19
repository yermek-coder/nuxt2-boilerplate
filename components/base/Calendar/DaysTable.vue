<template>
  <div class="day-picker">
    <div class="header">
      <button class="button-left" @click="setMonthToPrev">
        <svg width="26px" height="26px" viewBox="0 -1 16 34">
          <path
            d="M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z"
            data-v-63f7b5ec=""
          ></path>
        </svg>
      </button>
      <base-calendar-month-picker v-model="model"></base-calendar-month-picker>
      <button class="button-right" @click="setMonthToNext">
        <svg width="26px" height="26px" viewBox="-5 -1 16 34">
          <path
            d="M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z"
            data-v-63f7b5ec=""
          ></path>
        </svg>
      </button>
    </div>
    <div class="grid">
      <div class="header">
        <p v-for="(day, i) in daysOfWeek" :key="i" class="week-item">
          {{ day }}
        </p>
      </div>
      <div class="days">
        <p
          v-for="(day, i) in days"
          :key="i"
          class="week-item"
          :class="[
            { passive: day.isNotInThisMonth },
            { today: day.isToday },
            { picked: day.isPicked },
          ]"
          @click="setDay(day.fullValue)"
        >
          {{ day.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isSameDay,
  isToday,
  parseISO,
  addMonths,
  subMonths,
  getMonth,
  format,
} from 'date-fns'
import { ru } from 'date-fns/locale'

export default {
  data: () => ({
    model: null,
  }),
  props: {
    value: {
      type: [String, Date],
      required: true,
    },
  },
  created() {
    this.model = parseISO(this.value)
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
    days() {
      const now = new Date(this.model)
      const firstWeekDay = startOfWeek(startOfMonth(now), { weekStartsOn: 1 })
      const lastWeekDay = endOfWeek(endOfMonth(now), { weekStartsOn: 1 })
      const arr = eachDayOfInterval({
        start: firstWeekDay,
        end: lastWeekDay,
      })
      return arr.map((el) => ({
        value: format(el, 'd', { locale: ru }),
        fullValue: el,
        isPicked: isSameDay(el, parseISO(this.value)),
        isNotInThisMonth: !isSameMonth(el, now),
        isToday: isToday(el),
      }))
    },
    nextMonth() {
      return getMonth(addMonths(this.model, 1))
    },
    prevMonth() {
      return getMonth(subMonths(this.model, 1))
    },
  },
  watch: {
    value() {
      this.model = parseISO(this.value)
    },
  },
  methods: {
    setDay(fullValue) {
      this.$emit('input', format(fullValue, 'yyyy-MM-dd'))
    },
    setMonthToNext() {
      this.model = addMonths(this.model, 1)
    },
    setMonthToPrev() {
      this.model = subMonths(this.model, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
$gap: 1.5rem;
.day-picker {
  background: $primary;
  width: 330px;
  padding: 1.3rem;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: $shadow-lg;
  border: 0.5px solid $secondary;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    button {
      border: none;
      background: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-user-select: none;
      user-select: none;
      color: $dark-grey;
      svg {
        width: 26px;
        height: 26px;
      }
    }
  }
}
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
    .week-item {
      cursor: pointer;
      min-height: 32px;
      aspect-ratio: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .picked {
      border: 1px solid $secondary;
      border-radius: 500px;
    }
    .passive {
      color: $passive;
    }
    .today {
      font-weight: 800;
    }
  }
}
</style>
