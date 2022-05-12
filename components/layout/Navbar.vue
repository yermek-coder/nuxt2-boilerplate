<template>
  <navbar id="navbar_main">
    <div class="container">
      <button class="logo_container">
        <img
          src="@/assets/images/icons/logo-mobile.svg"
          alt="Logo"
          class="logo_mobile"
        />
        <img
          src="@/assets/images/icons/logo-desktop.svg"
          alt="Logo"
          class="logo_desktop"
        />
      </button>
      <div class="navigation">
        <nuxt-link class="nav-link" to="/guitars">
          <li>Guitars</li>
        </nuxt-link>
        <nuxt-link class="nav-link" to="/accessories">
          <li>Accessories</li>
        </nuxt-link>
        <nuxt-link class="nav-link" to="/storage">
          <li>Storage</li>
        </nuxt-link>
        <nuxt-link class="nav-link" to="/lessons">
          <li>Lessons</li>
        </nuxt-link>
        <nuxt-link class="nav-link" to="/repairs">
          <li>Repairs</li>
        </nuxt-link>
      </div>
      <div class="buttons">
        <base-icon-button class="button" icon="basket"></base-icon-button>
        <base-icon-button class="button" icon="user"></base-icon-button>
        <base-icon-button class="button" icon="hamburger"></base-icon-button>
      </div>
    </div>
  </navbar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
navbar {
  list-style: none;
  width: 100%;
  position: fixed;
  height: 80px;
  display: block;
  z-index: 999;
  background: linear-gradient(0deg, transparent 0%, $color-black-deep 100%);
  > .container {
    background: none;
    height: 100%;
    .logo_container {
      height: 100%;
      display: table;
      float: left;
      border: none;
      background: none;
      margin-right: 24px;
      .logo_mobile {
        width: 152px;
        height: 100%;
        display: table-cell;
        vertical-align: middle;
      }
      .logo_desktop {
        width: 255px;
        height: 100%;
        display: none;
        vertical-align: middle;
      }
      @include respond-to('small') {
        .logo_desktop {
          display: table-cell;
        }
        .logo_mobile {
          display: none;
        }
      }
    }
    .navigation {
      float: left;
      height: 100%;
      display: none;
      @include respond-to('medium') {
        display: block;
      }
      .nav-link {
        height: 100%;
        display: table;
        float: left;
        text-decoration: none;
        padding: 0 16px;
        > li {
          display: table-cell;
          vertical-align: middle;
          height: 100%;
          color: white;
          cursor: pointer;
        }
      }
    }
    .buttons {
      height: 100%;
      display: table;
      float: right;
      border: none;
      background: none;
      .button {
        height: 100%;
        display: table-cell;
        vertical-align: middle;
      }
      :not(:last-child) {
        display: none;
      }
      @include respond-to('medium') {
        .button {
          display: none;
        }
        :not(:last-child) {
          display: table-cell;
        }
      }
    }
  }
}
</style>
