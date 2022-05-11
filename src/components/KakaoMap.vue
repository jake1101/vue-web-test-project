<script setup lang="ts">
import { ref, onMounted } from 'vue';
const kakaomap = ref();
onMounted(() => {
  const initMap = () => {
    const container = kakaomap.value;
    const la = 37.521465431127;
    const lo = 126.912984294998;
    const options = {
      center: new kakao.maps.LatLng(la, lo),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(la, lo);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    const a = {
      h1: 'https://map.kakao.com/link/map/D-META,37.521465431127,126.912984294998',
      h2: 'https://map.kakao.com/link/to/D-META,37.521465431127,126.912984294998',
      s: 'style="color:blue"',
    };

    const iwContent = `
      <div style="padding:5px;">
        D-META
        <br>
        <a href="${a.h1}" ${a.s} target="_blank">큰지도보기</a>
        <a href="${a.h2}" ${a.s} target="_blank">길찾기</a>
      </div>
    `.trim(); // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    const iwPosition = new kakao.maps.LatLng(37.521465431127, 126.912984294998); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    infowindow.open(map, marker);
  };

  if (window.kakao && window.kakao.maps) {
    initMap();
  } else {
    const script = document.createElement('script');
    script.onload = () => kakao.maps.load(initMap);
    script.src =
      'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' +
      import.meta.env.VITE_KAKAOMAP_KEY;
    document.head.appendChild(script);
  }
});
</script>

<template>
  <div class="w-full h-full" ref="kakaomap"></div>
</template>
