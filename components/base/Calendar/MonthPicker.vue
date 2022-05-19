<template>
  <div class="month-picker" v-click-outside="hideModal">
    <div @click="toggleModal" class="header">
      <span>{{ monthAndYear }} </span>
    </div>
    <div v-if="showModal" class="modal">
      <div class="header">
        <button class="button-left" @click="getPrevYears">
          <svg width="26px" height="26px" viewBox="0 -1 16 34">
            <path
              d="M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z"
              data-v-63f7b5ec=""
            ></path>
          </svg>
        </button>
        <span @click="toggleShowYears">{{ yearTitle }}</span>
        <button class="button-right" @click="getNextYears">
          <svg width="26px" height="26px" viewBox="-5 -1 16 34">
            <path
              d="M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z"
              data-v-63f7b5ec=""
            ></path>
          </svg>
        </button>
      </div>
      <div class="table">
        <span
          v-for="year in years"
          :key="year.id"
          v-show="showingYears"
          :class="{ picked: year.isPicked }"
          @click="pickYear(year.fullValue)"
          >{{ year.value }}</span
        >
        <span
          v-for="(month, i) in months"
          :key="i"
          v-show="!showingYears"
          :class="{ picked: month.isPicked }"
          @click="pickMonth(month.fullValue)"
          >{{ month.value }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  getYear,
	getMonth,
  eachMonthOfInterval,
  eachYearOfInterval,
  isSameYear,
  isSameMonth,
  format,
  set,
  startOfYear,
  endOfYear,
  addYears,
  subYears,
} from 'date-fns'
import { ru } from 'date-fns/locale'

export default {
  data: () => ({
    model: null,
		modelYear: null,
		showModal: false,
    showingYears: false,
  }),
  props: {
    value: {
      type: [String, Date],
      required: true,
    },
  },
  created() {
    this.model = this.value
		this.modelYear = this.value
  },
  computed: {
    monthAndYear() {
      return format(this.value, 'LLLL yyyy', { locale: ru })
    },
    startOf12years() {
      return subYears(this.modelYear, 6)
    },
    endOf12years() {
      return addYears(this.modelYear, 5)
    },
    yearTitle() {
      if (this.showingYears)
        return `${getYear(this.startOf12years)} - ${getYear(this.endOf12years)}`
      else return getYear(this.model)
    },
    months() {
      const now = new Date()
      const arr = eachMonthOfInterval({
        start: startOfYear(now),
        end: endOfYear(now),
      })
      return arr.map((el) => ({
        value: format(el, 'LLL', { locale: ru }),
        fullValue: el,
        isPicked: isSameMonth(el, this.value),
      }))
    },
    years() {
      const arr = eachYearOfInterval({
        start: this.startOf12years,
        end: this.endOf12years,
      })
      return arr.map((el) => ({
        id: 'year' + el.getTime(),
        value: getYear(el),
        fullValue: el,
        isPicked: isSameYear(el, this.value),
      }))
    },
  },
  watch: {
    value() {
      this.model = this.value
    },
  },
  methods: {
    pickMonth(fullValue) {
			this.model = set(this.model, { month: getMonth(fullValue) })
			this.$emit('input', this.model)
			this.showModal = false
    },
    pickYear(year) {
      this.model = set(this.model, { year: getYear(year) })
			this.showingYears = false
    },
    getNextYears() {
      if (this.showingYears) this.modelYear = addYears(this.modelYear, 12)
      else this.model = addYears(this.model, 1)
    },
    getPrevYears() {
      if (this.showingYears) this.modelYear = subYears(this.modelYear, 12)
      else this.model = subYears(this.model, 1)
    },
    toggleShowYears() {
      this.showingYears = !this.showingYears
    },
		toggleModal() {
			this.showModal = !this.showModal
		},
		hideModal() {
			this.showModal = false
		}
  },
}
</script>

<style lang="scss" scoped>
.month-picker {
  font-weight: 700;
  font-size: 14px;
  position: relative;
  > .header {
    font-size: 22px;
    cursor: pointer;
  }
  > span {
    cursor: pointer;
  }
  .modal {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 150%;
    background: #2d3748;
    box-shadow: $shadow-lg;
    padding-bottom: 0.1rem;
    border-radius: 6px;
    color: white;
    > .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.5rem 0;
      > span {
        cursor: pointer;
      }
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
          path {
            fill: white;
          }
        }
      }
    }
    > .table {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 2px;
      grid-column-gap: 5px;
      .picked {
        border: 1px solid $secondary;
        border-radius: 500px;
      }
      > span {
        width: 48px;
        text-align: center;
        padding: 4px 0;
        cursor: pointer;
      }
    }
  }
}
</style>
