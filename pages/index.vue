<template>
  <div>
    <section class="hero">
      <div class="container">
        <h1>Fullfilling dreams with strings attached</h1>
      </div>
    </section>
    <section class="lessons-wrapper container">
      <div class="lessons">
        <div class="text-block">
          <h2>FREE GUITAR LESSONS!</h2>
          <p>
            Purchase any guitar over $499.99 and recieve a one-hour guitar
            lesson free.
          </p>
        </div>
        <base-button class="button">LEARN MORE</base-button>
      </div>
    </section>
    <layout-section title="New Products">
      <div class="guitars-grid">
        <base-card
          v-for="product in products"
          :key="product.id"
          :item="product"
        ></base-card>
      </div>
    </layout-section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    products: [
      {
        id: 1,
        title: 'Guitar',
        description: 'Very cool',
        price: '5600$',
        available: 12,
      },
      {
        id: 2,
        title: 'Guitar',
        description: 'Very cool',
        price: '5600$',
        available: 12,
      },
      {
        id: 3,
        title: 'Guitar',
        description: 'Very cool',
        price: '5600$',
        available: 12,
      },
      {
        id: 4,
        title: 'Guitar',
        description: 'Very cool',
        price: '5600$',
        available: 12,
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('@/assets/images/hero-bg.jpg');
  background-image: linear-gradient(180deg, transparent, black),
    url('@/assets/images/hero-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 200px 0;
  color: $color-white;
  .container {
    > h1 {
      font-size: 32px;
      text-align: center;
    }
  }
  @include respond-to('small') {
    padding: 300px 0;
    .container {
      > h1 {
        text-align: inherit;
        font-size: 56px;
        width: 475px;
      }
    }
  }
}
.lessons-wrapper {
  height: 5rem;
    @include respond-to("small") {
    height: 9rem;
  }
}
.lessons {
  padding: 18px 0;
  color: $color-white;
  background-color: $color-primary;
  border-radius: $border-radius;
  overflow: hidden;
  text-align: center;
  position: relative;
  transform: translateY(-50%);
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 30%;
    z-index: -1;
    background: url('@/assets/images/lessons-bg.jpg') no-repeat center/cover;
  }
  @include respond-to('small') {
    padding: 50px 0;
  }
  .text-block {
    position: relative;
    max-width: 225px;
    margin: 0 auto;
    > h2 {
      font-size: 21px;
      font-family: $font-1;
      margin-bottom: 5px;
      @include respond-to('small') {
        font-size: 46px;
      }
    }
    @include respond-to('medium') {
      max-width: 600px;
    }
    > p {
      font-size: 10px;
      font-family: $font-1;
      font-size: 600;
      @include respond-to('small') {
        font-size: 24px;
      }
    }
    @include respond-to('small') {
      max-width: 600px;
    }
  }
  .button {
    position: relative;
    margin-top: 16px;
    z-index: 1;
  }
}

.guitars-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @include respond-to('small') {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @include respond-to('medium') {
    > :last-child {
      display: none;
    }
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
