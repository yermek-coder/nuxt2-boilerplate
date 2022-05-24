<template>
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
</template>
<script>
import { addMonths, subMonths } from 'date-fns'

export default {
  props: {
    value: {
      type: Date,
      required: true,
    },
    animationName: {
      type: String,
      required: true,
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
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
</style>
