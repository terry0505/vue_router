<template>
  <div>
    <h2>📰 게시글 상세</h2>
    <p><strong>게시글 ID:</strong>{{ postId }}</p>
    <p><strong>작성자:</strong>{{ writer }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const postId = route.params.id;
const writer = route.query.writer || "익명";
</script>
