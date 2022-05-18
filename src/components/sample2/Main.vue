<script setup lang="ts">
import KakaoMap from '../KakaoMap.vue';
import SectionVerticalCard from './SectionVerticalCard.vue';
import SectionHorizontalCardVue from './SectionHorizontalCard.vue';
import SectionSlider from './SectionSlider.vue';
import src0 from '@/assets/images/train-window.jpg';

const verticalCard = [
  {
    id: 'verticalCard_00',
    divBg: 'bg-light',
    imgSrc: src0,
    imgAlt: 'section1Img',
    h3Title: 'Commodo cillum esse velit dolor commodo qui culpa.',
    pParagraph: `Magna nostrud consequat Lorem nulla et excepteur elit proident
              voluptate cupidatat minim do sint reprehenderit. Et mollit eu eu
              sunt amet dolore non cupidatat occaecat do. Et excepteur ut
              commodo duis irure do consectetur esse et enim ipsum duis enim
              reprehenderit. Cupidatat est incididunt tempor cupidatat mollit
              culpa excepteur deserunt do eiusmod. Magna nostrud aute elit ea.
              Voluptate aliqua est minim irure ea ullamco proident laboris esse
              duis mollit. Mollit ea nisi commodo Lorem tempor culpa velit anim
              culpa in dolore cupidatat. Est et dolor minim id exercitation
              deserunt eu aute anim enim magna adipisicing pariatur ipsum.
              Excepteur amet id dolor aliqua enim eiusmod aliqua. Velit quis
              officia pariatur deserunt duis in enim reprehenderit esse
              consequat.`,
    isReverse: false,
    test: 0,
  },
  {
    id: 'verticalCard_01',
    divBg: 'bg-light',
    imgSrc: src0,
    imgAlt: 'section1Img',
    h3Title: 'Commodo cillum esse velit dolor commodo qui culpa.',
    pParagraph: `Magna nostrud consequat Lorem nulla et excepteur elit proident
              voluptate cupidatat minim do sint reprehenderit. Et mollit eu eu
              sunt amet dolore non cupidatat occaecat do. Et excepteur ut
              commodo duis irure do consectetur esse et enim ipsum duis enim
              reprehenderit. Cupidatat est incididunt tempor cupidatat mollit
              culpa excepteur deserunt do eiusmod. Magna nostrud aute elit ea.
              Voluptate aliqua est minim irure ea ullamco proident laboris esse
              duis mollit. Mollit ea nisi commodo Lorem tempor culpa velit anim
              culpa in dolore cupidatat. Est et dolor minim id exercitation
              deserunt eu aute anim enim magna adipisicing pariatur ipsum.
              Excepteur amet id dolor aliqua enim eiusmod aliqua. Velit quis
              officia pariatur deserunt duis in enim reprehenderit esse
              consequat.`,
    isReverse: true,
    test: 0,
  },
];

const horizontalCard = [
  { id: 'horizontalCard_01', isReverse: false },
  { id: 'horizontalCard_02', isReverse: true },
  { id: 'horizontalCard_03', isReverse: false },
];
</script>
<template>
  <main ref="refMain" class="flex flex-col gap-[100px] mt-[100px]">
    <div class="flex flex-col gap-[100px]">
      <SectionVerticalCard
        v-for="(card, i) in verticalCard"
        :key="card.id + '_' + i"
        :data="card"
        :idx="i"
      />
    </div>

    <div>
      <SectionHorizontalCardVue
        v-for="(card, i) in horizontalCard"
        :key="card.id + '_' + i"
        :data="card"
        :index="i"
      />
    </div>

    <div class="container flex justify-between w-full h-[500px]">
      <KakaoMap />
    </div>

    <div>
      <SectionSlider />
    </div>
  </main>
</template>
