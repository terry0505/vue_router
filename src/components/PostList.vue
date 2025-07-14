<template>
  <div class="list-wrapper">
    <h2 class="list-title">게시글 목록</h2>
    <ul class="post-list">
      <li v-for="post in store.posts" :key="post.id" class="post-item">
        <router-link :to="`/post/${post.id}`" class="post-link">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { usePostStore } from "@/stores/posts";
const store = usePostStore();
</script>

<style scoped>
.list-wrapper {
  max-width: 720px;
  margin: 60px auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.list-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  margin-bottom: 12px;
}

.post-link {
  text-decoration: none;
  color: #3498db;
  font-size: 18px;
  transition: color 0.2s;
}
.post-link:hover {
  color: #21618c;
  text-decoration: underline;
}
</style>
