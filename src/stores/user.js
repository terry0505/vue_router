import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: ""
  }),
  actions: {
    setUsername(name) {
      this.username = name;
    },
    logout() {
      this.username = "";
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.username
  }
});
