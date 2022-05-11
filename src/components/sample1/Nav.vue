<script setup lang="ts">
import { ref } from 'vue';
const itemStyle =
  'text-light text-xl  border-b border-transparent hover:text-tertiary hover:border-b hover:border-tertiary transition-color duration-200';
const navItemList = [
  {
    id: 'nav_link_1',
    href: '#section1',
    text: 'nav1',
    class: itemStyle + ' active',
  },
  {
    id: 'nav_link_2',
    href: '#section2',
    text: 'nav2',
    class: itemStyle,
  },
  {
    id: 'nav_link_3',
    href: '#section3',
    text: 'nav3',
    class: itemStyle,
  },
  {
    id: 'nav_link_4',
    href: '#section4',
    text: 'nav4',
    class: itemStyle,
  },
  {
    id: 'nav_link_6',
    href: '#section6',
    text: 'nav5',
    class: itemStyle,
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

  const section = document.getElementById(current.href.split('#')[1]);
  section!.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
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
