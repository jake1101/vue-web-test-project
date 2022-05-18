<script setup lang="ts">
import { ref, onMounted } from 'vue';
const { data } = defineProps(['data']);
const refSection = ref();
onMounted(() => {
  const elSection = refSection.value as HTMLElement;
  const doTranslate = (num: number) => (num / 10).toFixed();
  const onScroll = () => {
    const top = (elSection.getBoundingClientRect().y - innerHeight) * -1;
    const full = innerHeight + elSection.clientHeight;
    const percent = (top * 100) / full;

    if (percent > 0 && percent <= 100) {
      elSection.querySelector<HTMLElement>(
        '.horizontal_bg'
      )!.style.backgroundPositionX = data.isReverse
        ? Number(doTranslate(top)) * -1 + 'px'
        : doTranslate(top) + 'px';
    }
  };

  document.addEventListener('scroll', onScroll);
});
</script>
<template>
  <section ref="refSection">
    <div
      class="horizontal_bg bg-[url(@/assets/images/train-window.jpg)] bg-cover bg-center h-[300px]"
    ></div>
  </section>
</template>
