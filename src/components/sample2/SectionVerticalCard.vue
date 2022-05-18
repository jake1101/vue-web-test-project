<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
const { data } = defineProps(['data', 'idx']);
const refSection = ref();
const isHover = ref(false);
const isActive = ref(false);
const classList = {
  gridCols: data.isReverse
    ? 'grid-cols-[1fr_minmax(0,_1.5fr)] '
    : 'grid-cols-[1.5fr_minmax(0,_1fr)] ',
  orderLast: data.isReverse ? 'order-last' : '',
  scaleHover: data.isReverse
    ? 'scale-100 hover:scale-110'
    : 'scale-110 hover:scale-100',
  translateImg: data.isReverse
    ? 'opacity-10 -translate-x-10'
    : 'opacity-10 translate-x-10',
  translateParagraph: data.isReverse
    ? 'opacity-10 translate-x-10'
    : 'opacity-10 -translate-x-10',
  r: data.isReverse,
};
onMounted(() => {
  const elSection = refSection.value as HTMLElement;
  const onScroll = () => {
    const top = (elSection.getBoundingClientRect().y - innerHeight) * -1;
    const full = innerHeight + elSection.clientHeight;
    const percent = (top * 100) / full;

    if (percent > 0 && percent < 100) {
      isActive.value = true;
    } else {
      isActive.value = false;
    }
  };

  document.addEventListener('scroll', onScroll);
});
</script>
<template>
  <section ref="refSection">
    <div :class="data.divBg">
      <div
        class="container h-[700px] max-h-[700px] flex items-center overflow-hidden"
      >
        <div :class="['grid ', classList.gridCols, 'gap-10']">
          <div
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
            :class="['mx-auto', classList.orderLast]"
          >
            <div
              :class="[
                'overflow-hidden ',
                isActive ? 'opacity-100' : classList.translateImg,
                ' transition-all duration-1000',
              ]"
            >
              <img
                :class="[
                  { isReverse: classList.r },
                  classList.scaleHover,
                  'transition-all duration-1000',
                ]"
                :src="`${data.imgSrc}`"
                :alt="data.imgAlt"
              />
            </div>
          </div>
          <div
            :class="[
              'mx-auto border-t border-t-tertiary pt-5 flex flex-col justify-between ',
              isActive ? 'opacity-100' : classList.translateParagraph,
              'transition-all duration-1000',
            ]"
          >
            <h3>{{ data.h3Title }}</h3>
            <p>{{ data.pParagraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
