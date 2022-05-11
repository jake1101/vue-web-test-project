<script setup lang="ts">
defineProps(['isHorizon']);
</script>

<template>
  <div
    class="background_container absolute top-0 left-0 w-full h-full overflow-visible z-[-1]"
  >
    <div
      class="flex justify-center align-center w-full h-[200%] absolute bottom-0 left-0"
    >
      <div
        :class="[
          'parallax',
          { horizon: isHorizon },
          {
            [isHorizon
              ? 'w-full bg-[url(@/assets/images/train-window.jpg)] bg-cover'
              : 'bg-secondary bg-[url(@/assets/images/railroad-crossing.png)] bg-auto']: true,
          },
          'w-full h-full',
        ]"
      ></div>
    </div>
  </div>
</template>
