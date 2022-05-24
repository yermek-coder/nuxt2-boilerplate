<template>
  <div class="bg">
    <h1>Boilerplate</h1>
    <base-date-input v-model="singleDate"></base-date-input>
    <base-date-picker v-model="singleDate" :inactive-dates="inactiveDates">
      <template #2022-05-09="{ day }">{{day.value}}slots</template>
    </base-date-picker>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    singleDate: new Date(),
    inactiveDates: {
      dates: [new Date('2022-05-15'), new Date('2022-05-12')],
      start: new Date('2022-05-03'),
      end: new Date('2022-05-08'),
    },
  }),
}
</script>

<style lang="scss" scoped>
.bg {
  background: rgb(153, 153, 153);
}
</style>
