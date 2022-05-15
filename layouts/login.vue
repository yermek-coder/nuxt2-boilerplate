<template>
  <div class="main-wrapper">
    <base-notifications />
    <Nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import notification from '@/mixins/notification'

Vue.mixin(notification)

export default {
  name: 'Login',
}
</script>

<style lang="scss" scoped></style>
