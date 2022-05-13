<script setup lang="ts">
import Parallax from './Parallax.vue';
</script>

<template>
  <section
    id="section6"
    class="bg-transparent relative overflow-hidden"
    style="height: calc(100vh - 10rem)"
  >
    <Parallax />

    <div class="flex flex-col justify-between gap-20 h-full py-20">
      <div>
        <h2 class="font-extrabold text-4xl text-center text-light">SECTION6</h2>
      </div>

      <div class="container flex justify-center w-full h-full">
        <div class="w-full max-w-[800px] h-full border border-light">
          문의하세요
        </div>
      </div>
    </div>
  </section>
</template>
