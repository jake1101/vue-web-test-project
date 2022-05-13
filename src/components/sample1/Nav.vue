<script setup lang="ts">
import { ref } from 'vue';

const navItemList = [
  {
    id: 'nav_link_1',
    href: '#section1',
    text: 'nav1',
    class: 'nav-link nav-active',
  },
  {
    id: 'nav_link_2',
    href: '#section2',
    text: 'nav2',
    class: 'nav-link',
  },
  {
    id: 'nav_link_3',
    href: '#section3',
    text: 'nav3',
    class: 'nav-link',
  },
  {
    id: 'nav_link_4',
    href: '#section4',
    text: 'nav4',
    class: 'nav-link',
  },
  {
    id: 'nav_link_6',
    href: '#section6',
    text: 'nav5',
    class: 'nav-link',
  },
];
const navRef = ref();

const onClick = (e: Event) => {
  const current = e.target as HTMLAnchorElement;
  const navContainer = navRef.value as Element;

  Array.from(navContainer.children).forEach((el) => {
    if (!(el instanceof HTMLAnchorElement)) return;

    el.href === current.href
      ? el.classList.add('active')
      : el.classList.remove('active');
  });

  const curSec = document.getElementById(
    current.href.split('#')[1]
  ) as HTMLElement;

  const { y } = curSec.getBoundingClientRect();
  const sy = scrollY - document.querySelector('header')!.offsetHeight;
  const add = curSec.id === 'section1' ? 0 : 2;
  scrollTo({
    top: y + sy + add,
    left: 0,
    behavior: 'smooth',
  });

  // const section = document.getElementById(current.href.split('#')[1]);
  // section!.scrollIntoView({
  //   behavior: 'smooth',
  //   block: 'start',
  //   inline: 'nearest',
  // });
};
</script>

<template>
  <nav
    ref="navRef"
    class="container h-full flex justify-center items-center gap-10"
  >
    <a
      v-for="(a, index) in navItemList"
      :id="a.id"
      :href="a.href"
      :key="a.id + '-' + index"
      :class="a.class"
      @click.prevent="onClick"
      >{{ a.text }}</a
    >
  </nav>
</template>

<style scoped>
/* nav {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  min-width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 2;
}

a {
  padding: 20px;
  font-weight: 900;
}

a.active {
  color: red;
  border-bottom: 1px solid red;
}

a:hover {
  color: gray;
} */
</style>
