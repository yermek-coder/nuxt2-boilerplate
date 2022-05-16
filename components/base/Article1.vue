<template>
  <article>
    <div class="container">
      <header>
        <h1>Business expertise</h1>
        <p>
          Having an idea but don’t know where to start? Let’s discuss and
          clarify the initial minimum set of business and functional
          requirements. We are doing competitors and market analysis, making
          sure your idea will make the right impact.
        </p>
      </header>
    </div>

    <div class="container-wide">
      <div class="links">
        <a v-for="card in links1" :key="card.id" href="#" class="link-card">
          <div class="text">
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
          </div>
          <img :src="card.url" :alt="card.title" />
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data: () => ({
    links1: [
      {
        id: 1,
        title: 'Building',
        description: 'custom CRM/ERP',
        url: require('@/assets/images/article1/image (1).png'),
      },
      {
        id: 2,
        title: 'Bringing to live',
        description: 'your Startup idea',
        url: require('@/assets/images/article1/image (2).png'),
      },
      {
        id: 3,
        title: 'Automating',
        description: 'your business processes',
        url: require('@/assets/images/article1/image (3).png'),
      },
      {
        id: 4,
        title: 'Boosting up',
        description: 'your exsisting development team',
        url: require('@/assets/images/article1/image (4).png'),
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
article {
  .container {
    h1 {
      margin: 16px 0;
      @include respond('lg') {
        margin: 50px 0;
      }
    }
  }
  .container-wide {
    .links {
      display: grid;
      gap: 16px;
      margin-top: 16px;
      @include respond('sm') {
        grid-template-columns: 1fr 1fr;
      }
      @include respond('xl') {
        gap: 30px;
      }
      .link-card {
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        background: none;
        flex-wrap: wrap;
        height: 121px;
        width: 100%;
        overflow: hidden;
        position: relative;
        transition: all 0.3s ease;
        &:hover {
        transition: all 0.3s ease;
          img {
            filter: brightness(0.4) blur(4px);
          }
        }
        @include respond('sm') {
          height: 146px;
        }
        @include respond('md') {
          height: 180px;
          padding: 0 26px;
        }
        @include respond('lg') {
          height: 238px;
          padding: 0 80px;
        }
        .text {
          z-index: 1;
          h2 {
            text-transform: capitalize;
            margin-bottom: 8px;
          }
          p {
            font-size: 500;
            color: $white;
          }
        }
        img {
          position: absolute;
          object-fit: cover;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          filter: brightness(0.4);
        }
      }
    }
  }
}
</style>
