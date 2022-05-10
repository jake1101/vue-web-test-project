<script setup lang="ts">
import Parallax from './Parallax.vue';
</script>

<template>
  <section
    id="section4"
    class="bg-transparent relative h-[600px] overflow-hidden"
  >
    <Parallax />

    <div class="container py-20 flex justify-between">
      <div class="w-[200px] h-[200px] border border-light">item1</div>
      <div class="w-[200px] h-[200px] border border-light">item1</div>
      <div class="w-[200px] h-[200px] border border-light">item1</div>
    </div>
  </section>
</template>
