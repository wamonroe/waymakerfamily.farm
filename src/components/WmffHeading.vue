<template>
  <component :is="tag" class="font-serif tracking-tight text-gray-900 dark:text-white">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h1'
    }
  }
}
</script>
