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
    <div ref="container" id="sectionContainer">
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
