import { makeAutoObservable } from "mobx";

class AuthStore {
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.checkAuth();
  }

  checkAuth() {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("test_jwt="));
    this.isAuth = !!token; // true если кука есть, false если нет
  }
}

const authStore = new AuthStore();
export default authStore;
