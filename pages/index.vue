<template>
  <div class="wrapper">
    <base-article1></base-article1>
    <base-article2></base-article2>
    <base-form></base-form>
    <base-reviews></base-reviews>
    <base-footer></base-footer>
    <div class="character-wrapper">
      <div class="character">
        <img
          src="@/assets/images/character/character_tie.svg"
          alt=""
          class="tie"
        />
        <img
          src="@/assets/images/character/character.svg"
          alt=""
          class="body"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  .character-wrapper {
    display: none;
    @include respond('xl') {
      display: block;
    }
    position: absolute;
    right: 294px;
    bottom: 404px;
    .character {
      position: relative;
      > img {
        position: absolute;
      }
      .tie {
        top: 103px;
        left: 58px;
        z-index: -1;
      }
    }
  }
}

</style>
