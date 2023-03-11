<template>
  <figure>
    <blockquote>
      <p class="italic text-center">
        <slot />
      </p>
    </blockquote>
    <figcaption class="mt-2 text-sm text-right">
      — <cite>{{ cite }}</cite>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    cite: {
      type: String,
      required: true
    }
  }
}
</script>
