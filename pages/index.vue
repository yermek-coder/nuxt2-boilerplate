<template>
  <div class="container-wide">
    <nav>
      <div class="logo-wrapper">
        <div class="logo">logo</div>
      </div>
      <div class="button-wrapper">
        <button class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
nav {
  height: 100px;
  .logo-wrapper {
    height: 100%;
    display: table;
    .logo {
      display: table-cell;
      
      font-weight: bold;
      font-size: 24px;
    }
  }
  .button-wrapper {
    height: 100%;
    float: right;
  }
}
</style>
