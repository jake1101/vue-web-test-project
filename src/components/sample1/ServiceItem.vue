<script setup lang="ts">
import { ref } from 'vue';
defineProps([]);
const onClick = () => {
  console.log(1);
};
</script>

<template>
  <div class="service-item" @click="onClick">
    <div class="service-item-alpha"></div>
    <div
      class="bg-[url(@/assets/images/icon1.png)] bg-center w-full h-full"
    ></div>
  </div>
</template>
