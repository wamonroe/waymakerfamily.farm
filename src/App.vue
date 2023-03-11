<script setup>
import { RouterView } from 'vue-router'
import WmffCard from './components/WmffCard.vue'
import WmffFooter from './components/WmffFooter.vue'
import WmffHeading from './components/WmffHeading.vue'
import WmffLogo from './components/WmffLogo.vue'
</script>

<template>
  <div class="flex flex-col items-center mb-4 space-y-4">
    <WmffCard class="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <WmffLogo class="w-full max-w-md mx-auto" />
      <WmffHeading class="my-6 text-4xl text-center">Way Maker Family Farm</WmffHeading>
      <RouterView />
    </WmffCard>
    <WmffFooter class="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl" />
  </div>
</template>
