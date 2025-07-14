<template>
  <div class="post-detail" v-if="post">
    <h2>{{ post.title }}</h2>

    <div class="meta">
      ✍️ {{ post.author }} | 🕒 {{ post.createdAt }} | 💬 댓글
      {{ post.comments?.length ?? 0 }}개
    </div>
    <p class="post-content">{{ post.content }}</p>
    <RouterLink to="/posts">← 목록으로 돌아가기</RouterLink>
  </div>

  <div v-else class="not-found">
    <h3>😢 게시글을 찾을 수 없습니다</h3>
    <p>주소가 잘못되었거나 삭제된 글일 수 있어요.</p>
    <RouterLink to="/posts">
      <button>게시글 목록으로 가기</button>
    </RouterLink>
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
  max-width: 640px;
  margin: 60px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
}

h2 {
  margin-bottom: 12px;
}

.meta {
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
}

.content {
  line-height: 1.6;
  color: #444;
  margin-bottom: 24px;
}

a {
  text-decoration: none;
  color: #42b983;
}

a:hover {
  text-decoration: underline;
}

.not-found {
  text-align: center;

  button {
    margin-top: 16px;
    padding: 10px 16px;
    background-color: #ff7676;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  button:hover {
    background-color: #e05555;
  }
}
</style>
