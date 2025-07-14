<template>
  <div class="form-wrapper">
    <input v-model="input" placeholder="이름을 입력하세요" class="input-box" />
    <button @click="save" class="submit-btn">저장하고 소개로</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const input = ref("");
const router = useRouter();
const store = useUserStore();

function save() {
  if (input.value.trim()) {
    store.setUsername(input.value.trim());
    router.push("/about"); // 저장 후 소개 페이지로 이동
  }
}
</script>

<style scoped>
.form-wrapper {
  max-width: 400px;
  margin: 100px auto;
  padding: 32px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.input-box {
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.2s;
}
.input-box:focus {
  border-color: #3498db;
  outline: none;
}

.submit-btn {
  padding: 12px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.submit-btn:hover {
  background-color: #2c80b4;
}
</style>
