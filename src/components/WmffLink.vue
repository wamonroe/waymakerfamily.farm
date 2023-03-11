<template>
  <a :href="href" class="font-bold hover:underline hover:text-blue-800 hover:dark:text-blue-400">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      require: true
    }
  }
}
</script>
