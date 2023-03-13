<script setup>
import { RouterView } from 'vue-router'
import WmffAppFooter from './components/WmffAppFooter.vue'
import WmffAppSection from './components/WmffAppSection.vue'
import WmffHeading from './components/WmffHeading.vue'
import WmffLogo from './components/WmffLogo.vue'
</script>

<template>
  <div class="flex flex-col items-center mb-4 space-y-4">
    <WmffAppSection>
      <WmffLogo class="w-full max-w-md mx-auto" />
      <WmffHeading class="my-6 text-4xl text-center">Way Maker Family Farm</WmffHeading>
      <RouterView />
    </WmffAppSection>
    <WmffAppFooter />
  </div>
</template>
