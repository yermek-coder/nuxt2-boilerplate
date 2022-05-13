<template>
  <div class="container">
    <div class="slides">
      <div
        v-for="image in images"
        :key="image.id"
        :style="`background-image: url('${image.url}');`"
        :id="`image-${image.id}`"
        :data-intersection_args="[image.id]"
        v-intersection:[image.id].9="intersectHandler"
      ></div>
    </div>
    <div class="thumbnails">
      <span
        v-for="image in images"
        :key="image.id"
        @click="scrollTo(image.id)"
        class="dot"
        :class="current === image.id ? 'active' : ''"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      current: 1,
    }
  },
  created() {
    const handler = (r) => {
      r.keys().forEach((key, i) =>
        this.images.push({
          url: r(key),
          id: i + 1,
        })
      )
    }
    handler(require.context('@/assets/images/', true, /\.(jpg)|(png)|(jpeg)$/))
  },
  computed: {
    thumbHeight() {
      const index = this.images.findIndex((el) => {
        return el.id === this.current
      })
      const height = Math.floor((100 / this.images.length) * (index + 1))
      return `height: ${height}%;`
    },
  },
  methods: {
    scrollTo(id) {
      const el = document.querySelector(`#image-${id}`)
      el.scrollIntoView({ behavior: 'smooth' })
    },
    intersectHandler(id) {
      this.current = id
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  height: 50px;
  width: 100%;
  overflow: hidden;
  .thumbnails {
    position: absolute;
    bottom: 3rem;
    height: 1rem;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 8px;
    .dot {
      height: 100%;
      aspect-ratio: 1;
      width: max-content;
      border: 2px white solid;
      border-radius: 500px;
      cursor: pointer;
    }
    .active {
      background-color: white;
    }
    // img {
    //   width: 40px;
    //   height: 40px;
    //   cursor: pointer;
    // }
  }
  // .scrollbar {
  //   width: 1px;
  //   height: 100%;
  //   background: #ccc;
  //   display: block;
  //   margin: 0 0 0 8px;
  //   .thumb {
  //     width: 1px;
  //     position: absolute;
  //     height: 0;
  //     transition: height 0.3s ease-in-out;
  //     background: #000;
  //   }
  // }
  .slides {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    > div {
      scroll-snap-align: start;
      height: 100%;
      overflow: auto;
      width: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
::-webkit-scrollbar {
  display: none !important;
}
</style>
