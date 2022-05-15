<template>
  <h1>Boilerplate</h1>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
h1 {
  color: red;
  @include respond-to('sm') {
    color: turquoise;
  }
}
</style>