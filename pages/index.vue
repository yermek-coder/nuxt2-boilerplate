<template>
  <div class="container">
    <div class="thumbnails">
      <div v-for="image in images" :key="image.id" @click="scrollTo(image.id)">
        <img :src="image.url" alt="image" />
      </div>
    </div>
    <div class="scrollbar">
      <div class="thumb" :style="thumbHeight"></div>
    </div>
    <div class="slides">
      <div
        v-for="image in images"
        :key="image.id"
        :style="`background-image: url('${image.url}');`"
        :id="`image-${image.id}`"
        :data-intersection_args="[image.id]"
        v-intersection="intersectHandler"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
          id: i,
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
      this.current = parseInt(id)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  .thumbnails {
    display: flex;
    flex-direction: column;
    gap: 8px;
    img {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
  .scrollbar {
    width: 1px;
    height: 100%;
    background: #ccc;
    display: block;
    margin: 0 0 0 8px;
    .thumb {
      width: 1px;
      position: absolute;
      height: 0;
      transition: height .3s ease-in-out;
      background: #000;
    }
  }
  .slides {
    margin: 0 16px;
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    width: 100%;
    padding: 0 0.25rem;
    height: 100%;
    overflow-y: auto;
    overscroll-behavior-y: contain;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
    > div {
      scroll-snap-align: start;
      height: 100vh;
      width: 100%;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}
</style>
