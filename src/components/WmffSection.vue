<script setup>
import WmffHeading from './WmffHeading.vue'
</script>

<template>
  <div>
    <WmffHeading tag="h2" class="mb-2 text-2xl">{{ title }}</WmffHeading>
    <div class="space-y-4">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
