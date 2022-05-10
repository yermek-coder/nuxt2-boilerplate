export default {
  methods: {
    $addNotif(notif) {
      this.$store.dispatch('notifications/add', notif)
    },
  },
}
