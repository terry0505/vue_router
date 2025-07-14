<template>
  <div class="post-detail" v-if="post">
    <h2>{{ post.title }}</h2>

    <div class="post-meta">
      <span>✍️ {{ post.author }}</span>
      <span>📅 {{ post.date }}</span>
      <span>💬 댓글 {{ post.comments }}개</span>
    </div>
    <p class="post-content">{{ post.content }}</p>
    <RouterLink to="/posts">← 목록으로 돌아가기</RouterLink>
  </div>

  <div v-else class="not-found">
    <h3>해당 게시글을 찾을 수 없습니다 😢</h3>
    <RouterLink to="/posts">← 게시글 목록</RouterLink>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { usePostStore } from "@/stores/post";
import { computed } from "vue";

const route = useRoute();
const store = usePostStore();

const postId = Number(route.params.id);
const post = computed(() => store.posts.find((p) => p.id === postId));
</script>

<style scoped lang="scss">
.post-detail,
.not-found {
  max-width: 600px;
  margin: 60px auto;
  padding: 24px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;

  h2 {
    margin-bottom: 12px;
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
    line-height: 1.6;
    color: #444;
    margin-bottom: 32px;
  }

  a {
    display: inline-block;
    margin-top: 20px;
    color: #42b983;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
}
</style>
