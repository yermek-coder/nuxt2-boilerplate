<template>
  <transition-group tag="div" class="notification" name="notification">
    <div
      v-for="item in notifications"
      :key="item.id"
      class="notification-badge"
      @click="remove(item.id)"
    >
      {{ item.text }}
    </div>
  </transition-group>
</template>

<script>
export default {
  computed: {
    notifications() {
      return this.$store.state.notifications.notifications
    },
  },
  methods: {
    remove(id) {
      this.$store.dispatch('notifications/remove', id)
    },
  },
}
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  top: 86px;
  right: 24px;
  z-index: 9999;

  > .notification-badge {
    margin-bottom: 12px;
  }
}

.notification-enter-active,
.notification-leave-active {
  transition: 0.5s;
}
.notification-enter, .notification-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(30%);
  opacity: 0;
}
.notification-leave-to,
.notification-leave-active {
  position: absolute;
}

.notification-move {
  transition: transform 0.5s;
}
</style>
