<script setup lang="ts">
import { ref, onMounted } from 'vue';

const wrapRef = ref();
const rotateRef = ref();
const imgRef = ref();
onMounted(() => {
  const onLoad = (e: Event) => {
    const el = e.target as HTMLImageElement;
    el.classList.add('z');

    const timerHandler = () => {
      el.classList.add('animate-zoom');
      clearTimeout(timer);
    };
    const timeout = 5100;
    const timer = setTimeout(timerHandler, timeout);
  };
  const aniImg = imgRef.value as HTMLImageElement;
  aniImg.addEventListener('load', onLoad);

  // const aniWrap = wrapRef.value as HTMLElement;
  // const aniRotate = rotateRef.value as HTMLElement;
  // aniRotate.style.transition = 'all 1000ms ease-in-out';

  // const onMouseenter = (e:MouseEvent) => {
  //   aniRotate.style.transition = 'all 1000ms ease-in-out';
  // }
  // aniWrap.addEventListener('mouseenter', onMouseenter);

  // const onMousemove = (e:MouseEvent) => {
  //   aniRotate.style.transition = '';
  //   const center = {
  //     x: aniWrap.getBoundingClientRect().left + (aniWrap.clientWidth / 2),
  //     y: aniWrap.getBoundingClientRect().top + (aniWrap.clientHeight / 2),
  //   };
  //   const x = center.x - e.clientX;
  //   const y = center.y - e.clientY;

  //   const px = x / center.x;
  //   const py = y / center.y;

  //   const radian = Math.atan2(y, x); // atan2함수
  //   const degree = (radian * 180 / Math.PI).toFixed(0);  // radian -> degree 변

  //   let rx = py;
  //   let ry = px;
  //   let rz = 1;
  //   let deg = 1+'deg';
  //   aniRotate.style.transform = `rotate3d(${rx}, ${ry}, ${rz}, ${deg})`;

  //   console.log('x: ', rx);
  //   console.log('y: ', ry);
  // };
  // aniWrap.addEventListener('mousemove', onMousemove);

  // const onMouseleave = () => {
  //   aniRotate.style.transform = '';
  // };
  // aniWrap.addEventListener('mouseleave', onMouseleave);
});
</script>
<template>
  <div
    class="wrap w-full overflow-hidden absolute z-0"
    ref="wrapRef"
    style="height: calc(100vh - 8rem)"
  >
    <div class="rotate" ref="rotateRef">
      <img
        class="object-cover w-full h-full"
        src="@/assets/images/home-background.jpg"
        alt="home"
        ref="imgRef"
      />
    </div>
  </div>
</template>
<!-- <style scoped>
.wrap {
  perspective: 600px;
}
.rotate {
  transform-style: preserve-3d;
}
img.z {
  transform: translateZ(80px);
  transition: all 5s cubic-bezier(0.77, 0, 0.175, 1); /* easeInOutQuart */
}
img.zoom {
  animation: zoom 5s infinite alternate;
}

@keyframes zoom {
  from {
    transform: translateZ(80px);
  }

  to {
    transform: translateZ(60px);
  }
}
</style> -->
