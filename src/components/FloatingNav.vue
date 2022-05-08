<script setup lang="ts">
import { ref } from 'vue';
let isOn = ref(false);

const onClick = () => (isOn.value = !isOn.value);
</script>

<template>
  <div>
    <button @click="onClick">nav</button>
    <nav :class="{ on: isOn }">
      <RouterLink to="/" @click="onClick">Home</RouterLink>
      <RouterLink to="/sample1" @click="onClick">Sample1</RouterLink>
      <RouterLink to="/sample2" @click="onClick">Sample2</RouterLink>
    </nav>
  </div>
</template>
<style scoped>
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
</style>
