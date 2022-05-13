<script setup lang="ts">
import Parallax from './Parallax.vue';
import KakaoMap from '../KakaoMap.vue';
</script>

<template>
  <section
    id="section4"
    class="bg-transparent relative h-[800px] overflow-hidden"
  >
    <Parallax />

    <div class="flex flex-col justify-between gap-20 h-full py-20">
      <div>
        <h2 class="font-extrabold text-4xl text-center text-light">SECTION4</h2>
      </div>

      <div class="container flex justify-between w-full h-full">
        <KakaoMap />
      </div>
    </div>
  </section>
</template>
