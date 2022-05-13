<script setup lang="ts">
import { ref, onMounted } from 'vue';
const animationRef = ref();
onMounted(() => {
  const aniImg = animationRef.value as HTMLImageElement;
  const onLoad = (e: Event) => {
    const img = e.target as HTMLImageElement;
  };
  aniImg.addEventListener('load', onLoad);

  const onMouseenter = () => {
    console.log('mouse enter');
  };
  const onMousemove = () => {
    console.log('mouse move');
  };
  const onMouseleave = () => {
    console.log('mouse leave');
  };

  aniImg.addEventListener('mouseenter', onMouseenter);
  // aniImg.addEventListener('mousemove', onMousemove);
  aniImg.addEventListener('mouseleave', onMouseleave);
});
</script>
<template>
  <div class="w-full overflow-hidden" style="height: calc(100vh - 8rem)">
    <img
      class="object-cover w-full h-full"
      src="@/assets/images/home-background.jpg"
      alt="home"
      ref="animationRef"
    />
  </div>
</template>
