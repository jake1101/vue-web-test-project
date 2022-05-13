<script setup lang="ts">
import ServiceItem from './ServiceItem.vue';
</script>

<template>
  <section id="section3" class="bg-light h-[900px]">
    <div class="flex flex-col justify-between gap-20 h-full py-20">
      <div>
        <h2 class="font-extrabold text-4xl text-center text-black">SECTION3</h2>
      </div>
      <div class="container h-full">
        <div class="w-full h-full grid grid-cols-3 gap-1">
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
        </div>
      </div>
    </div>
  </section>
</template>
