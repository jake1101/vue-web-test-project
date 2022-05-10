<script setup lang="ts">
import { onMounted } from 'vue';
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
import Section3 from './Section3.vue';
import Section4 from './Section4.vue';
import Section5 from './Section5.vue';
import Section6 from './Section6.vue';
function skipHeight(): number {
  return document.querySelector('nav')!.offsetHeight;
}

function bgcMover(obj: any): Function {
  const { he, ss, se, rvs }: any = obj;
  const y = window.scrollY;
  const mover = (): string => {
    const p = Math.floor(((y - ss) / se) * 100);
    const result = (he * p) / 100;
    const speed = rvs ? 0.5 : 0.8;
    const position = rvs ? `50% -${result * speed}px` : `50% ${result}px`;
    return position;
  };

  return mover;
}

onMounted(function () {
  const startScrollHeight = (idx: number): number => {
    const list = Array.from(document.querySelectorAll('section')).map(
      (e: HTMLElement, i) => (i === 0 ? 0 : e.clientHeight)
    );

    let result = 0;

    for (let j = 0; j < idx; j++) {
      result += list[j];
    }

    return result;
  };

  const heightFromTop = (idx: number): any => {
    const list = Array.from(document.querySelectorAll('section'))
      .map((e: HTMLElement) => e.clientHeight)
      .slice(1);

    let result = document.querySelectorAll('section')![0].clientHeight;

    for (let j = 0; j < idx; j++) {
      result += list[j];
    }

    return result;
  };

  const sectionList = Array.from(document.querySelectorAll('section')).map(
    (e, i) => ({
      el: e,
      bg: e.querySelector<HTMLElement>('.background_container .parallax')!,
      he: e.clientHeight,
      ss: startScrollHeight(i),
      sh:
        startScrollHeight(i) +
        e.clientHeight +
        window.innerHeight -
        skipHeight(),
      se: e.clientHeight + window.innerHeight - skipHeight(),
      rvs: e.querySelector<HTMLElement>(
        '.background_container .parallax:is(.reverse)'
      )!
        ? true
        : false,
      nid: `nav_link_${i + 1}`,
      hft: heightFromTop(i),
    })
  );

  const onScroll = () => {
    const y = window.scrollY;
    const showingSectionDataList = sectionList.filter((o: any) => {
      const { bg, ss, sh } = o;
      if (bg) {
        if (y > ss && y < sh) return o;
      }
    });

    showingSectionDataList.forEach((e) => {
      const m = bgcMover(e);
      e.bg.style.backgroundPosition = m();
    });

    const activateSectionData = sectionList.find((o) => y < o.hft)!;
    const activateNav: HTMLElement = document.getElementById(
      activateSectionData!.nid
    )!;

    document.querySelectorAll('a[id*="nav_link_"]').forEach((e) => {
      if (activateNav) {
        e === activateNav
          ? e.classList.add('activate')
          : e.classList.remove('activate');
      }
    });
  };

  document.addEventListener('scroll', onScroll);
});
</script>

<template>
  <main>
    <div class="fixed top-20 left-0 w-full h-screen z-[-1]">
      <img
        class="object-cover w-full h-screen"
        src="@/assets/images/home-background.jpg"
        alt="@/assets/images/home-background.jpg"
      />
    </div>
    <div ref="container" id="sectionContainer" class="relative top-20 left-0">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  </main>
</template>

<!-- <style scoped>
main {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
}
.container {
  max-width: 980px;
  margin: 0 auto;
}
.container > div {
  position: fixed;
  top: calc(0 + 50px);
  left: 0;
  width: 100%;
  min-width: 980px;
  height: 100vh;
  z-index: -2;
}

.container > div > img {
  object-fit: cover;
  width: inherit;
  min-width: inherit;
  height: inherit;
  z-index: inherit;
}

.container > div::after {
  all: inherit;
  position: absolute;
  top: 0;
  background: linear-gradient(to top, #000, 40%, transparent);
  z-index: 0;
  content: '';
}
</style> -->
