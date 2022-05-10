<template>
  <div class="product-card">
    <div class="picture">
      <div class="photo"></div>
      <div class="background"></div>
    </div>
    <div class="description">
      <h5 class="title"></h5>
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
