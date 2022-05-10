<script setup lang="ts">
import Rellax from 'rellax';
import { onMounted } from 'vue';

onMounted(() => {
  new Rellax('.bg1', {
    wrapper: '.wrap',
    center: true,
  });
});
</script>

<template>
  <div class="h-[10000px] m-[500px] border-[20px] border-red-800">
    <div
      class="wrap border-[10px] relative w-full h-[500px] top-[0] overflow-scroll"
    >
      <div class="h-[500%]">
        <div
          class="bg1 w-[10%] h-[10%] bg-[url(@/assets/images/section4-background.jpg)] bg-contain"
          :data-rellax-speed="-10"
        ></div>
        resfs
      </div>
    </div>
  </div>
</template>
