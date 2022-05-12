<template>
  <button
    class="base-icon-button"
    :class="[{ large }, { small }, { xsmall }]"
    :type="type"
    @click="clickHandler"
  >
    <i :class="[`i-${icon}`]"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    large: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    xsmall: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
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
.base-icon-button {
  padding: 6px;
  border: none;
  cursor: pointer;
	background: transparent;

  // &:hover {
  //   background: var(--color-main-450);
  // }

  // &:active {
  //   background: var(--color-main-600);
  // }

  > i {
    height: 20px;
    width: 20px;
    background-color: white;
    display: block;
  }

  // sizing
  &.large {
    padding: 4px;

    > i {
      height: 30px;
      width: 30px;
    }
  }

  &.small {
    padding: 4px;

    > i {
      height: 16px;
      width: 16px;
    }
  }
  &.xsmall {
    padding: 2px;

    > i {
      height: 12px;
      width: 12px;
    }
  }
}
</style>
