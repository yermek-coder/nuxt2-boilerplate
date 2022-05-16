<template>
  <article>
    <div class="container">
      <header>
        <h3>domain Expertise</h3>
        <p>
          A well written description of any project makes it possible for the
          indented audience (e.g. the sponsor, the executive) to understand the
          concept and context of the proposed project and to realize whether to
          approve and finance the project or not.
        </p>
      </header>
      <div class="links">
        <div v-for="card in links1" :key="card.id" class="link-card">
          <div class="text">
            <h4>{{ card.title }}</h4>
            <a href="#" class="arrow-link">read more<span></span></a>
          </div>
          <img :src="card.url" :alt="card.title" />
        </div>
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
        title: 'Gas & Electricity',
        url: require('@/assets/images/article2/image (1).png'),
      },
      {
        id: 2,
        title: 'Solar energy',
        url: require('@/assets/images/article2/image (2).png'),
      },
      {
        id: 3,
        title: 'E-learning',
        url: require('@/assets/images/article2/image (3).png'),
      },
      {
        id: 4,
        title: 'Retail',
        url: require('@/assets/images/article2/image (4).png'),
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
article {
  .container {
    h3 {
      margin: 16px 0;
      text-transform: uppercase;
      @include respond('lg') {
        margin: 50px 0;
      }
    }

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
          h4 {
            text-transform: capitalize;
            margin-bottom: 8px;
          }
          .arrow-link {
            padding: 12px;
            border: 2px solid white;
            text-transform: uppercase;
            font-weight: 700;
            background: transparent;
            color: $white;
            width: 166px;
            display: flex;
            justify-content: space-between;
            align-items: center;
						transition: all .3s ease;
            &:hover {
              color: $primary;
              background: $white;
              span {
                background: $primary;
                mask: url('@/assets/images/icons/arrow-right.svg') no-repeat
                  center/contain;
              }
            }
            span {
              height: 24px;
              width: 24px;
              background: url('@/assets/images/icons/arrow-right.svg') no-repeat
                center/contain;
            }
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
