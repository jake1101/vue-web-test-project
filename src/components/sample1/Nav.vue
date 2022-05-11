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
    id: 'nav_link_5',
    href: '#section5',
    text: 'nav5',
    class: itemStyle,
  },
  {
    id: 'nav_link_6',
    href: '#section6',
    text: 'nav6',
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
    block: 'end',
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
    <!-- <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="https://flowbite.com" class="flex items-center">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >D-META</span
        >
      </a>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          ref="navRef"
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li v-for="(a, index) in navItemList" :key="index">
            <a
              :id="a.id"
              :href="a.href"
              :key="a.id + '-' + index"
              :class="a.class"
              @click="onClick"
              >{{ a.text }}</a
            >
          </li>
        </ul>
      </div>
    </div> -->
    <!-- <a
      v-for="(a, index) in navItemList"
      :id="a.id"
      :href="a.href"
      :key="index"
      :class="a.class"
      @click="onClick"
      >{{ a.text }}</a
    > -->
    <!-- <a href="#1" class="shadow-md active" @click="onClick">nav1</a>
    <a href="#2" @click="onClick">nav2</a>
    <a href="#3" @click="onClick">nav3</a> -->
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
