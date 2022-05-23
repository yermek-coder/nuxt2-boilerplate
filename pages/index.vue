<template>
  <div class="bg">
    <h1>Boilerplate</h1>
    <base-date-input v-model="singleDate"></base-date-input>
    <base-date-picker v-model="singleDate"></base-date-picker>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    singleDate: new Date()
  }),
}
</script>

<style lang="scss" scoped>
.bg {
  background: rgb(153, 153, 153);
}
</style>
