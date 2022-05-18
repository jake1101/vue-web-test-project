<script setup lang="ts">
import { ref } from 'vue';

const isLoad = ref(false);
</script>
<template>
  <section class="relative" style="height: calc(100vh - 8rem)">
    <div
      class="w-full overflow-hidden absolute top-0 left-0 z-[-2]"
      style="height: calc(100vh - 8rem)"
    >
      <div class="translate-z-3" ref="rotateRef">
        <img
          @load="isLoad = true"
          :class="[
            'object-cover w-full h-full ',
            isLoad ? 'scale-125' : 'scale-100 ',
          ]"
          class="object-cover w-full h-full"
          src="@/assets/images/home-background.jpg"
          alt="home"
          style="transition: all 3s cubic-bezier(0.77, 0, 0.175, 1)"
        />
      </div>
    </div>
  </section>
</template>
