<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
let isHidden = ref(true);

const style = 'px-2 py-2 bg-black rounded opacity-30 text-white';

const onClick = () => (isHidden.value = !isHidden.value);
</script>

<template>
  <div class="fixed top-3 right-3 z-50 flex gap-3">
    <nav :class="['flex gap-3', style, { hidden: isHidden }]">
      <RouterLink to="/" @click="onClick">Home</RouterLink>
      <RouterLink to="/sample1" @click="onClick">Sample1</RouterLink>
      <RouterLink to="/sample2" @click="onClick">Sample2</RouterLink>
    </nav>
    <button :class="style" @click="onClick">nav</button>
  </div>
</template>
<!-- <style scoped>
div {
  position: fixed;
  right: 5%;
  top: 10px;
  text-align: right;

  display: flex;
  align-content: center;
  flex-direction: row-reverse;
  z-index: 3;
}

button {
  padding: 10px;
  border: none;
  border-radius: 6px;
  opacity: 0.4;
  z-index: 2;
}

button:hover {
  cursor: pointer;
}

nav {
  border-radius: 10px;
  background: #000;
  opacity: 0.4;
  padding: 10px;

  display: none;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

nav.on {
  display: flex;
}

a {
  color: #fff;
}
</style> -->
