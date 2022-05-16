<template>
  <nav>
    <div class="container-wide">
      <div class="logo-wrapper">
        <div class="logo">logo</div>
      </div>
      <div class="button-wrapper">
        <a href="#" class="contact-btn">contact us</a>
        <button class="hamburger">
          <div class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  height: 80px;
  border-bottom: 1px solid $primary;
  @include respond('md') {
    border-bottom: none;
  }
  > .container-wide {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
  }
  .logo-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: default;
    .logo {
      font-weight: bold;
			color: $primary-2;
      font-size: 24px;
      text-transform: uppercase;
    }
  }
  .button-wrapper {
    @extend .logo-wrapper;
    margin-left: auto;
    gap: 45px;
    .contact-btn {
      color: $white;
      font-weight: 700;
      font-size: 14px;
      padding: 11px 12px;
      background-color: $primary;
      text-transform: uppercase;
      display: none;
      @include respond('sm') {
        display: block;
      }
    }
    .hamburger {
      height: 100%;
      display: flex;
      align-items: center;
      background: none;
      cursor: pointer;
      @include respond('md') {
        display: none;
      }
      .hamburger-icon {
        height: 12px;
        width: 18px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span {
          height: 2px;
          width: 100%;
          background-color: $secondary;
        }
      }
    }
  }
}
</style>
