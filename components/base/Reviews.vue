<template>
  <section>
    <div class="container">
      <header>
        <h3>Company profile & rating</h3>
      </header>
      <div class="reviews">
        <p>
          A well written description of any project makes it possible for the
          indented audience (e.g. the sponsor, the executive) to understand the
          concept and context of the proposed project and to realize whether to
          approve and finance the project or not.
        </p>
        <div class="widgets">
          <img src="@/assets/images/review1.png" alt="Review 1" />
          <img src="@/assets/images/review2.png" alt="Review 2" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  @include respond('sm') {
    padding-bottom: 30px;
  }
  header {
    h3 {
      text-transform: uppercase;
      margin: 16px 0;
      @include respond('lg') {
        margin: 50px 0;
      }
    }
  }
  .reviews {
    display: flex;
    flex-wrap: wrap;
    @include respond('sm') {
      flex-wrap: nowrap;
    }
    .widgets {
      margin: 20px 0;
      @include respond('sm') {
        margin: 0;
      }
      :first-child {
        margin-bottom: 20px;
      }
      > img {
        display: block;
      }
    }
  }
}
</style>
