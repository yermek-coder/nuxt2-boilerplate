<template>
  <section :style="`background-color: ${bgColor};`">
    <div class="container">
      <h3 v-if="title">{{ title }}</h3>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: 'inherit',
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 3.5rem 0;
  > h3 {
    margin-bottom: 2rem;
    font-size: 24px;
    position: relative;
    text-align: center;
    border-top: 3px solid $color-primary;
    width: fit-content;
    color: $color-black-normal;
    left: 50%;
    padding-top: 5px;
    transform: translateX(-50%);
    @include respond-to('small') {
      font-size: 40px;
    }
  }
}
</style>
