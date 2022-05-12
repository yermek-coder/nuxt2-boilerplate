<template>
  <div class="product-card">
    <div class="picture"></div>
    <div class="description">
      <div class="row">
        <h5 class="title">{{ item.title }}</h5>
        <h6 class="price">{{ item.price }}</h6>
      </div>
      <p class="text">{{ item.description }}</p>
      <div class="count">
        {{ item.available }} <span> colors available</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.product-card {
  box-shadow: $shadow-main, $shadow-dropdown;
  border-radius: $border-radius;
  .picture {
    height: 252px;
    width: 100%;
    background: $gradient-radial;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    position: relative;
    &::before {
      content: '';
      top: -15px;
      bottom: 15px;
      width: 100%;
      position: absolute;
      background: url('@/assets/images/guitar-transparent.png');
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  .description {
    background-color: $color-white;
    padding: 24px;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    :not(:last-child) {
      margin-bottom: 6px;
    }
    .row {
      display: flex;
      justify-content: space-between;
    }
    .text {
      min-height: 42px;
      color: $color-black-light;
      font-size: 16px;
      font-family: 'Work Sans', sans-serif;
      font-weight: 500;
    }
    .count {
      border-radius: 500px;
      border: 1px solid $color-grey;
      width: fit-content;
      font-size: 12px;
      font-weight: bold;
      padding: 2px 8px;
      > span {
        font-weight: 400;
      }
    }
  }
}
</style>
