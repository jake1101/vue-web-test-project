<script setup lang="ts">
import Section1 from './Section1.vue';
</script>

<template>
  <main>
    <div class="container">
      <div>
        <img src="@/assets/images/home-background.jpg" alt="home-background" />
      </div>
      <Section1 />
    </div>
  </main>
</template>

<style scoped>
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
</style>
