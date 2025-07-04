<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToPost() {
  router.push({
    path: "/post/123",
    query: { writer: "홍길동" }
  });
}
</script>

<template>
  <div>
    <h2>홈 페이지</h2>
    <button @click="goToPost">게시글 123 보기</button>
  </div>
</template>
