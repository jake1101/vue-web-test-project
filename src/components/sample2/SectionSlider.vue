<script setup lang="ts">
import { ref, onMounted } from 'vue';
import icon1 from '@/assets/images/icon1.png';
import icon2 from '@/assets/images/icon2.png';
import icon3 from '@/assets/images/icon3.png';

const isSlide = ref(false);
const slideItemList = ref([
  {
    src: icon1,
    alt: 'icon1',
  },
  {
    src: icon2,
    alt: 'icon2',
  },
  {
    src: icon3,
    alt: 'icon3',
  },
  {
    src: icon1,
    alt: 'icon1',
  },
  {
    src: icon2,
    alt: 'icon2',
  },
  {
    src: icon3,
    alt: 'icon3',
  },
  {
    src: icon1,
    alt: 'icon1',
  },
  {
    src: icon2,
    alt: 'icon2',
  },
  {
    src: icon3,
    alt: 'icon3',
  },
]);
const onAnimation = () => {
  slideItemList.value.splice(
    slideItemList.value.length,
    0,
    slideItemList.value[0]
  );
  slideItemList.value.splice(0, 1);
};

const refSection = ref();
onMounted(() => {
  const elSection = refSection.value as HTMLElement;
  const onScroll = () => {
    const top = (elSection.getBoundingClientRect().y - innerHeight) * -1;
    const full = innerHeight + elSection.clientHeight;
    const percent = (top * 100) / full;

    if (percent > 0 && percent < 100) {
      isSlide.value = true;
    } else {
      isSlide.value = false;
    }
  };

  document.addEventListener('scroll', onScroll);
});
</script>
<template>
  <section ref="refSection">
    <div class="bg-primary h-[500px]">
      <div
        :class="[
          'container relative w-[1200px] h-full mx-auto overflow-hidden',
        ]"
      >
        <div class="absolute top-[50%] left-0 translate-y-[-50%]">
          <div
            @animationiteration="onAnimation"
            :class="[
              'flex justify-center gap-[40px] ',
              isSlide ? 'animate-slide' : '',
            ]"
          >
            <div
              v-for="(item, index) in slideItemList"
              :key="index"
              :class="['slideItem']"
              class="slideItem"
            >
              <img
                :src="item.src"
                :alt="item.alt"
                :class="['w-[200px] min-w-[200px]']"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- <style scoped>
.slide {
  animation: slide 1000ms ease;
  animation-iteration-count: infinite;
  animation-delay: 1000ms;
}
@keyframes slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-240px);
  }
}
</style> -->
