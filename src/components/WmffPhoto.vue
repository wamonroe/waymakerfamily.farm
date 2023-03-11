<template>
  <div class="overflow-hidden rounded-2xl drop-shadow-2xl">
    <img :src="imageUrl" class="object-cover" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    imageUrl() {
      let imagePath = this.src.replace(/^@\//, '../')
      return new URL(imagePath, import.meta.url).href
    }
  }
}
</script>
