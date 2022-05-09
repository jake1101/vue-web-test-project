<script setup lang="ts">
import { onMounted } from 'vue';
import Rellax from 'rellax';

const props = defineProps(['id', 'speed']);

onMounted(() => {
  const container = document.getElementById('sectionContainer');
  const section = document.getElementById('section' + props.id);
  const topList = Array.from(container.children)
    .filter((el) => {
      if (!(el instanceof HTMLElement)) return null;
      return (
        Number(el.id.split('section')[1]) <
        Number(section.id.split('section')[1])
      );
    })
    .map((el, idx) => (idx === 0 ? 0 : el.clientHeight));
  const topHeight = topList.reduce((pre, cur) => pre + cur, 0);

  let rellax;
  window.addEventListener('scroll', () => {
    if (rellax) return;
    if (window.scrollY > topHeight) {
      rellax = new Rellax('.rellax' + props.id);
    }
  });
});

const style =
  'bg-[url("@/assets/images/section4-background.jpg")] w-full h-screen bg-cover';
</script>
<template>
  <div class="absolute bottom-0 left-0 w-full z-[-1]">
    <div
      :class="[{ ['rellax' + props.id]: true }, style]"
      :data-rellax-speed="speed"
    ></div>
  </div>
</template>
