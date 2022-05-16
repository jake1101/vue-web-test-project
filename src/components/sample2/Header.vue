<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  const headerRef = ref();
  const fixedRef = ref();
  onMounted(() => {
    const headerEl = headerRef.value as HTMLElement;
    const fixedEl = fixedRef.value as HTMLDivElement;
    const onScroll = () => {
      if(scrollY > fixedEl.scrollHeight) {
        headerEl.classList.replace('h-32', 'h-12');
        fixedEl.classList.add('fixed', 'top-0', 'left-0');
      }else{
        headerEl.classList.replace('h-12', 'h-32');
        fixedEl.classList.remove('fixed', 'top-0', 'left-0')
      }
    }
    window.addEventListener('scroll', onScroll);
  })
</script>
<template>
  <header ref="headerRef" class="h-32 flex items-center transition-all duration-500">
    <div ref="fixedRef" class="w-full z-10 bg-light">
      <div class="relative">
        <div class="container">
          <div class="h-12"></div>
        </div>
        <div class="absolute top-full left-0 bg-light">
          <div class="container">
          </div>
        </div>
      </div>
    </div>

  </header>
</template>
