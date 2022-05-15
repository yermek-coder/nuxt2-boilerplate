<template>
  <main>
    <h1><nuxt-link to="/login">Login</nuxt-link></h1>
    <h1>Main</h1>
    <h1>{{ $auth.loggedIn }}</h1>
    <button @click="$auth.logout('local')">Logout</button>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    model: {}
  }),
  async fetch() {
    this.model = await this.$api.get('user/9').data
  }
}
</script>
