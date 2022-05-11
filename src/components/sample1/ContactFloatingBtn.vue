<script setup lang="ts">
import { ref } from 'vue';
const isClicked = ref('bg-secondary/80');
const isHidden = ref(true);

const onClick = () => {
  isHidden.value = !isHidden.value;
  isClicked.value = isHidden.value ? 'bg-secondary/80' : 'bg-tertiary/80';
};
const btnStyle =
  'fixed bottom-3 right-3 text-light hover:bg-tertiary/80 transition-colors duration-200 rounded';
const containerStyle =
  'fixed inset-1/2 translate-x-[-50%] translate-y-[-50%] bg-light w-[500px] h-[500px]';
</script>

<template>
  <div :class="[btnStyle, { [isClicked]: true }]" @click="onClick">
    <button class="p-3">contact</button>
  </div>
  <div :class="[containerStyle, { hidden: isHidden }]">
    <div class="flex justify-end">
      <button @click="onClick">닫기</button>
    </div>
    <div>문의하기 팝업</div>
  </div>
</template>
