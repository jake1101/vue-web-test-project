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
      sh:
        startScrollHeight(i) +
        e.clientHeight +
        window.innerHeight -
        skipHeight(),
      se: e.clientHeight + window.innerHeight - skipHeight(),
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
          ? e.classList.add('active')
          : e.classList.remove('active');
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
      <div class="hidden">
        undefined
        <a
          href="https://www.flaticon.com/authors/smashicons"
          title="Smashicons"
        >
          Smashicons
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com'</a
        >
      </div>
    </div>
  </main>
</template>
