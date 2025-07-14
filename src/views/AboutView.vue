<template>
  <div class="about-wrapper">
    <h2 class="about-title">소개 페이지</h2>
    <p class="about-text">
      <strong class="username">{{ store.username }}</strong
      >님을 소개합니다.
    </p>
    <LogoutButton class="logout-button" />
    <router-link to="/" class="home-link">← 홈으로 돌아가기</router-link>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";
import LogoutButton from "@/components/LogoutButton.vue";

const router = useRouter();
const store = useUserStore();

onMounted(() => {
  if (!store.username) {
    alert("이름이 없습니다. 홈으로 이동합니다.");
    router.push("/");
  }
});
</script>

<style scoped>
.about-wrapper {
  max-width: 600px;
  margin: 100px auto;
  padding: 32px;
  background-color: #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.about-title {
  font-size: 26px;
  color: #333;
  margin-bottom: 20px;
}

.about-text {
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
}

.username {
  font-weight: bold;
  color: #3498db;
}

.logout-button {
  margin-bottom: 20px;
}

.home-link {
  display: inline-block;
  font-size: 14px;
  color: #3498db;
  text-decoration: none;
  margin-top: 12px;
  transition: color 0.2s;
}
.home-link:hover {
  color: #21618c;
  text-decoration: underline;
}
</style>
