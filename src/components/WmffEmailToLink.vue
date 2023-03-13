<script setup>
import WmffLink from './WmffLink.vue'
</script>

<template>
  <WmffLink href="#mailto" @click="handleClick">
    <slot />
  </WmffLink>
</template>

<script>
export default {
  props: {
    encoded_contact: {
      type: String,
      default: 'ZXJpY2FAbW9ucm9lcG9zdC5jb20'
    }
  },
  computed: {
    contact() {
      return atob(this.encoded_contact)
    }
  },
  methods: {
    handleClick(event) {
      event.preventDefault()
      event.stopPropagation()
      window.location.href = `mailto:${this.contact}`
    }
  }
}
</script>
