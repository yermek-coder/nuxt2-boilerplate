<template>
  <content>
    <layout-section><base-card :item="item" /></layout-section>
  </content>
</template>

<script>
export default {
  name: 'IndexPage',
  data: (()=>({
    item: {
      title: "Guitar",
      description: "Very cool",
      price: "5600$",
      available: 12
    }
  }))
}
</script>
