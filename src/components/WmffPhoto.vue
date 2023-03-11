<template>
  <div class="overflow-hidden rounded-2xl drop-shadow-2xl">
    <img :src="src" class="object-cover" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>
