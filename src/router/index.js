import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import UserView from "@/views/UserView.vue";
import PostView from "@/views/PostView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/about", name: "About", component: AboutView },
  { path: "/user/:name", name: "User", component: UserView },
  { path: "/post/:id", name: "Post", component: PostView },
  { path: "/login", component: LoginView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
