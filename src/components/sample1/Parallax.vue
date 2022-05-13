<script setup lang="ts">
import { onMounted } from 'vue';
defineProps(['isHorizon']);

function bgcMover(obj: any): Function {
  const { he, ss, se, horizon }: any = obj;
  const y = window.scrollY;
  const mover = (): string => {
    const p = Math.floor(((y - ss) / se) * 100);
    const result = (he * p) / 100;
    const speed = 1;
    const position = horizon
      ? `-${result * speed}px 50%`
      : `50% -${result * speed}px`;
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
      sh: startScrollHeight(i) + e.clientHeight + window.innerHeight,
      se: e.clientHeight + window.innerHeight,
      horizon: e.querySelector<HTMLElement>(
        '.background_container .parallax:is(.horizon)'
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
          ? e.classList.add('nav-active')
          : e.classList.remove('nav-active');
      }
    });
  };

  document.addEventListener('scroll', onScroll);
});
</script>

<template>
  <div
    class="background_container absolute top-0 left-0 w-full h-full overflow-visible z-[-1]"
  >
    <div
      class="flex justify-center align-center w-full h-[200%] absolute bottom-0 left-0"
    >
      <div
        :class="[
          'parallax',
          { horizon: isHorizon },
          {
            [isHorizon
              ? 'w-full bg-horizon bg-cover'
              : 'bg-secondary bg-pattern bg-auto']: true,
          },
          'w-full h-full',
        ]"
      ></div>
    </div>
  </div>
</template>
