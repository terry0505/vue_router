<template>
  <div class="post-wrapper">
    <div v-if="post" class="post-container">
      <h2 class="post-title">{{ post.title }}</h2>
      <div class="post-meta">
        <span>✍️ {{ post.author }}</span>
        <span>📅 {{ post.date }}</span>
        <span>💬 댓글 {{ post.comments }}개</span>
      </div>
      <div class="post-content">{{ post.content }}</div>
      <router-link to="/" class="back-link">← 목록으로</router-link>
    </div>

    <div v-else class="post-not-found">
      <p>📭 게시글을 찾을 수 없습니다.</p>
      <router-link to="/" class="back-link">← 홈으로</router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { usePostStore } from "@/stores/posts";

const route = useRoute();
const store = usePostStore();
const post = store.getPostById(route.params.id);
</script>

<style scoped>
.post-wrapper {
  padding: 40px 20px;
  max-width: 720px;
  margin: 0 auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.post-container {
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.post-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.post-meta {
  font-size: 14px;
  color: #777;
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
}

.post-content {
  font-size: 16px;
  line-height: 1.7;
  color: #444;
  white-space: pre-line;
  margin-bottom: 32px;
}

.back-link {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-size: 14px;
  margin-top: 12px;
  transition: color 0.2s;
}
.back-link:hover {
  color: #21618c;
}

.post-not-found {
  text-align: center;
  background: #fff3f3;
  padding: 40px;
  border: 1px solid #ffd6d6;
  border-radius: 8px;
  color: #b22222;
}
</style>
