<script setup lang="ts">
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
import Section3 from './Section3.vue';
import Section4 from './Section4.vue';
import Section5 from './Section5.vue';
import Section6 from './Section6.vue';
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
