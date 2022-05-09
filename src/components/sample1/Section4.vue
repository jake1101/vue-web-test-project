<script setup lang="ts">
import SectionBg from './SectionBg.vue';
</script>

<template>
  <section id="section4" class="bg-transparent relative overflow-hidden">
    <SectionBg id="4" speed="-10" />

    <div class="container h-[500px] py-20 flex justify-between">
      <div class="w-[200px] h-[200px] border border-light">item1</div>
      <div class="w-[200px] h-[200px] border border-light">item1</div>
      <div class="w-[200px] h-[200px] border border-light">item1</div>
    </div>
  </section>
</template>
