<template>
  <button :class="[{ big }, { small }]" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    big: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickHandler(e) {
      if (this.type === 'button') {
        e.preventDefault()
      }
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  border: none;
  background: $color-button;
  padding: 12px 16px;
  border-radius: 500px;
  font-family: $font-1;
  font-weight: 600;
  font-size: 14px;
  color: white;
  width: fit-content;
  height: fit-content;
}
.small {
  padding: 8px 12px;
  font-size: 12px;
}
.big {
  padding: 16px 24px;
  font-size: 18px;
}
</style>
