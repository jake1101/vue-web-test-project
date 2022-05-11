<script setup lang="ts">
import Parallax from './Parallax.vue';
</script>

<template>
  <section
    id="section2"
    class="section2 bg-transparent relative h-[800px] overflow-hidden"
  >
    <Parallax />
    <div class="flex flex-col justify-evenly h-full">
      <div>
        <h2 class="font-extrabold text-4xl text-center text-light">SECTION2</h2>
      </div>
      <div class="container flex justify-evenly">
        <div class="w-[200px] h-full flex flex-col justify-center gap-10">
          <img src="@/assets/images/icon1.png" alt="icon1" />
          <div class="w-full h-[200px] border p-1 border-light text-light">
            item1
          </div>
        </div>
        <div class="w-[200px] h-full flex flex-col justify-center gap-10">
          <img src="@/assets/images/icon2.png" alt="icon2" />
          <div class="w-full h-[200px] border p-1 border-light text-light">
            item1
          </div>
        </div>
        <div class="w-[200px] h-full flex flex-col justify-center gap-10">
          <img src="@/assets/images/icon3.png" alt="icon3" />
          <div class="w-full h-[200px] border p-1 border-light text-light">
            item1
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
