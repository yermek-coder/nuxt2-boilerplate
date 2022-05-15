<template>
  <main>
    <h1>
      <nuxt-link to="/">Main</nuxt-link>
    </h1>
    <h1>Login</h1>
    <form @submit.prevent="userLogin">
      <input v-model="model.username" type="text" />
      <input v-model="model.password" type="password" />
      <button type="submit">Login</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'login',
  data: () => ({
    model: {},
  }),
  methods: {
    userLogin() {
      const data = {
        username: this.model.username,
        password: this.model.password,
      }
      this.$auth.loginWith('local', { data: data }).then((response) => {
        const user = { ...response.data }
				delete user.refresh
				delete user.access
				this.$auth.setUser(user)
				this.$api.setToken(this.$auth.strategy.token.get())
      })
    },
  },
}
</script>
