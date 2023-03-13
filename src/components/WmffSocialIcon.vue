<template>
  <a :href="href" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>
