<script setup lang="ts">
import Parallax from './Parallax.vue';
import KakaoMap from '../KakaoMap.vue';
</script>

<template>
  <section
    id="section4"
    class="bg-transparent relative h-[600px] overflow-hidden"
  >
    <Parallax />

    <div class="container py-20 flex justify-between w-full h-full">
      <KakaoMap />
    </div>
  </section>
</template>
