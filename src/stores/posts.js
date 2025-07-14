import { defineStore } from "pinia";

export const usePostStore = defineStore("posts", {
  state: () => ({
    posts: [
      {
        id: 1,
        title: "Vue 3 시작하기",
        content: "Composition APIT를 배워봅시다.",
        author: "박하나",
        date: "2025-07-14",
        comments: 3
      },
      {
        id: 2,
        title: "Pinia란?",
        content: "간단한 상태 관리 라이브러리입니다.",
        author: "박둘",
        date: "2025-07-13",
        comments: 2
      },
      {
        id: 3,
        title: "Vue Router 활용법",
        content: "SPA의 핵심입니다.",
        author: "박셋",
        date: "2025-07-12",
        comments: 4
      }
    ]
  }),
  getters: {
    getPostById: (state) => (id) =>
      state.posts.find((post) => post.id === Number(id))
  }
});
