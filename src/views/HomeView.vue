<script setup>
import imageUrl from '@/assets/img/photo.webp'
import WmffContent from '../components/WmffContent.vue'
import WmffEmailToLink from '../components/WmffEmailToLink.vue'
import WmffPhoto from '../components/WmffPhoto.vue'
import WmffPriceGroup from '../components/WmffPriceGroup.vue'
import WmffPriceGroupItem from '../components/WmffPriceGroupItem.vue'
import WmffQuote from '../components/WmffQuote.vue'
</script>

<template>
  <div class="space-y-8">
    <WmffQuote cite="Isaiah 30:21 CSB">
      "Whenever you turn to the right or to the left, your ears will hear this command behind you:
      'This is the way. Walk in it.'"
    </WmffQuote>
    <WmffPhoto :src="imageUrl" class="w-full" />
    <WmffContent title="About Us">
      <p>
        Hey we're Alex and Erica Monroe. We're so glad you found us here. We're a micro family farm
        raising our 5 kids and enjoying cultivating and using the land we have been blessed with.
        We're located in south Howell, Michigan on 7 beautiful acres. On our small farm we have a
        dairy cow, a handful of goats and a whole bunch of free range chickens. Our ducks enjoy
        splashing in the pond all day. We are first generation farmers (aka we don't totally know
        what we're doing and mostly flying by the seat of our pants LOL!) So we're constantly
        learning, growing and improving to be more efficient and sustainable.
      </p>
    </WmffContent>

    <WmffContent title="Who Is Way Maker">
      <p>
        We believe our "Way Maker" is Jesus Christ, our Savior. He has led us in this journey that
        we are on and we continue to seek Him as He leads us on this Way. We are passionate about
        His love for us and His creation and would love to share that with you as well. Our desire
        is to bless you as we share our products with you.
      </p>
    </WmffContent>

    <WmffContent title="Our Goals">
      <p>
        At Way Maker Family Farm our goal is to raise our family and animals in a way that honors
        the Way of our Creator. We strive to source organic feeds and use regenerative practices on
        our land.
      </p>
    </WmffContent>

    <WmffContent title="Current Products">
      <p>
        At this time our organic pasture raised chicken and duck eggs are for sale. Please contact
        us if you would like to purchase any.
      </p>
      <WmffPriceGroup class="max-w-lg">
        <WmffPriceGroupItem title="Chicken Eggs" price="$5/dozen" />
        <WmffPriceGroupItem title="Duck Eggs" price="$5/dozen" />
      </WmffPriceGroup>
    </WmffContent>

    <WmffContent title="Contact Us!">
      <p>
        For more info, questions, or to purchase eggs please
        <WmffEmailToLink>send us an email</WmffEmailToLink>.
      </p>
    </WmffContent>
  </div>
</template>
