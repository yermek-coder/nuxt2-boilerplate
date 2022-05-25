<template>
  <div class="day-picker">
    <base-calendar-month-header
      v-model="model"
      :animation-name="animationName"
    ></base-calendar-month-header>
    <base-calendar-days-table
      :animation-name="animationName"
      :month-key="monthKey"
      @setDay="setDay"
    >
      <template #days>
        <span
          v-for="day in days"
          :key="day.dateValue"
          class="week-item"
          @click="setDay(day)"
          :class="[
            { notCurrentMonth: day.isNotInThisMonth },
            { inactive: day.inactive },
            { today: day.isToday },
            { picked: day.isPicked },
          ]"
        >
          {{ day.value }}
          <div class="slot">
            <slot :name="day.dateValue" :day="day"></slot>
          </div>
        </span>
      </template>
    </base-calendar-days-table>
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
  isWithinInterval,
  format,
} from 'date-fns'
import { ru } from 'date-fns/locale'
export default {
  data: () => ({
    model: null,
    animationName: 'offset-left',
  }),
  props: {
    value: {
      type: Date,
      required: true,
    },
    inactiveDates: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    days() {
      const now = this.model
      const firstWeekDay = startOfWeek(startOfMonth(now), { weekStartsOn: 1 })
      const lastWeekDay = endOfWeek(endOfMonth(now), { weekStartsOn: 1 })
      const arr = eachDayOfInterval({
        start: firstWeekDay,
        end: lastWeekDay,
      })
      return arr.map((el) => ({
        value: format(el, 'd', { locale: ru }),
        dateValue: format(el, 'yyyy-MM-dd'),
        fullValue: el,
        isPicked: isSameDay(el, this.value),
        isNotInThisMonth: !isSameMonth(el, now),
        isToday: isToday(el),
        inactive: this.checkInactive(el),
      }))
    },
    monthKey() {
      return format(this.model, 'yyyy-MM')
    },
  },
  created() {
    this.model = this.value
  },
  watch: {
    value() {
      this.model = this.value
    },
    model: {
      handler(val, oldVal) {
        if (!val || !oldVal) return
        if (val.getTime() < oldVal.getTime()) this.animationName = 'offset-left'
        else this.animationName = 'offset-right'
      },
    },
  },
  methods: {
    setDay(day) {
      if (day.inactive) return
      this.$emit('input', day.fullValue)
    },
    checkInactive(day) {
      if (Object.keys(this.inactiveDates) === 0) return false
      if (
        this.inactiveDates.dates &&
        this.inactiveDates.dates.some((el) => isSameDay(day, el))
      ) {
        return true
      }
      if (this.inactiveDates.start && this.inactiveDates.end) {
        return isWithinInterval(day, {
          start: this.inactiveDates.start,
          end: this.inactiveDates.end,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.day-picker {
  user-select: none;
  background: $primary;
  width: 300px;
  padding: 1.3rem;
  border-radius: 10px;
  box-shadow: $shadow-lg;
  border: 0.5px solid $secondary;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.week-item {
  cursor: pointer;
  min-height: 32px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > .slot {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
.picked {
  background-color: rgba($secondary, 0.4);
  border-radius: 500px;
}
.notCurrentMonth {
  color: $passive;
}
.inactive {
  color: $passive;
  cursor: not-allowed;
}
.today {
  font-weight: 800;
}
</style>
