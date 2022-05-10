<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps(['id', 'speed']);

onMounted(() => {
  const container = document.getElementById('sectionContainer')!;
  const section = document.getElementById('section' + props.id)!;
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

  window.addEventListener('scroll', () => {
    if (window.scrollY > topHeight) {
    }
  });
});
</script>
<template>
  <div
    :class="[
      'absolute top-0',
      // { ['top-[-100%]']: speed < 0 ? true : false },
      // { ['top-0']: speed > 0 ? true : false },

      'left-0 w-full h-[200%] z-[-1]',
    ]"
  >
    <div
      :class="[
        {
          ['rellax' + id]: true,
        },
        'bg-[url(@/assets/images/section4-background.jpg)] bg-contain w-full h-full',
      ]"
      :data-rellax-speed="speed"
    ></div>
    <!-- <div
      :class="[
        { ['rellax' + props.id]: true },
        'bg-[url(@/assets/images/section4-background.jpg)] w-full h-[100%] bg-contain',
      ]"
      :data-rellax-speed="speed"
      :data-rellax-percentage="0.5"
    ></div> -->
  </div>
</template>
