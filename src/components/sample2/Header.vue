<script setup lang="ts">
import { ref, onMounted } from 'vue';
const refFixed = ref();
const isMaxHeight = ref(true);
const isFixed = ref(false);
onMounted(() => {
  const elFixed = refFixed.value as HTMLDivElement;
  const onScroll = () => {
    if (scrollY > elFixed.scrollHeight) {
      isMaxHeight.value = false;
      isFixed.value = true;
    } else {
      isMaxHeight.value = true;
      isFixed.value = false;
    }
  };
  window.addEventListener('scroll', onScroll);
});
</script>
<template>
  <header
    :class="[
      'flex items-center transition-all duration-500',
      isMaxHeight ? 'h-32' : 'h-12',
    ]"
  >
    <div
      ref="refFixed"
      :class="['w-full z-10 bg-light', isFixed ? 'fixed top-0 left-0' : '']"
    >
      <div class="relative">
        <div class="container">
          <div class="h-12"></div>
        </div>
        <div class="absolute top-full left-0 bg-light">
          <div class="container"></div>
        </div>
      </div>
    </div>
  </header>
</template>
