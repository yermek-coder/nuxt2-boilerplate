<template>
  <div class="container">
    <input type="date" v-model="model"/>
    <span class="icon"></span>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  props: {
    value: {
      type: Date,
      default: new Date(),
    },
  },
  computed: {
    model: {
      get() {
        return format(this.value, 'yyyy-MM-dd')
      },
      set(value) {
        const temp = new Date(value)
        this.$emit('input', temp)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 40px;
  width: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    right: 6px;
		cursor: pointer;
    background-color: black;
    mask: url('@/assets/icons/calendar.svg') no-repeat center / contain;
  }
}
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
</style>
