<template>
  <footer>
    <div class="links container">
      <div class="social">
        <a href="#">
          <label for="rss">
            <img src="@/assets/images/icons/rss.svg" alt="rss" id="rss" />
            <p>RSS feed</p>
          </label>
        </a>
        <a href="#">
          <label for="github">
            <img
              src="@/assets/images/icons/github.svg"
              alt="github"
              id="github"
            />
            <p>/github</p>
          </label>
        </a>
        <a href="#">
          <label for="linkedin">
            <img
              src="@/assets/images/icons/linkedin.svg"
              alt="linkedin"
              id="linkedin"
            />
            <p>/linkedin</p>
          </label>
        </a>
      </div>
      <div class="logo">logo</div>
    </div>
    <div class="footer">© Copyright 2005-2019 All rights reserved</div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  border-top: 1px solid $light-grey;
  width: 100%;
  backdrop-filter: blur(4px);
  background-color: rgba($white, 0.7);
  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 171px;
    @include respond('sm') {
      height: 150px;
      flex-direction: row;
      justify-content: space-between;
    }
    .social {
      display: flex;
      justify-content: space-between;
      width: 146px;
      @include respond('sm') {
        width: 372px;
      }
      label {
        max-height: 100%;
        display: flex;
        cursor: pointer;
        flex-wrap: nowrap;
        p {
          display: none;
          margin-left: 5px;
          @include respond('sm') {
            display: inline-block;
            width: max-content;
          }
        }
      }
    }
    .logo {
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      display: block;
    }
  }
  .footer {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    font-size: 12px;
    background-color: $primary;
    cursor: default;
  }
}
</style>
