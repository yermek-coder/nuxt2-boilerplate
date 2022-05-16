<template>
  <div class="main-wrapper">
    <base-notifications />
    <base-navbar></base-navbar>
    <base-sidemenu></base-sidemenu>
    <base-breadcrumbs></base-breadcrumbs>
    <Nuxt class="nuxt-page" />
  </div>
</template>

<script>
import Vue from 'vue'
import notification from '@/mixins/notification'

Vue.mixin(notification)

export default {
  name: 'Default',
}
</script>

<style lang="scss" scoped>

</style>
