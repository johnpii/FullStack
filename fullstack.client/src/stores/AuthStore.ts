import { makeAutoObservable } from "mobx";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
  nbf: number;
  exp: number;
}

class AuthStore {
  isAuth: boolean = false;
  username: string = "";
  email: string = "";
  role: string = "";

  constructor() {
    makeAutoObservable(this);
    this.checkAuth();
  }

  checkAuth() {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("test_jwt="));

    if (token) {
      const decodedToken = jwtDecode<JwtPayload>(token.split("=")[1]);
      this.isAuth = true;
      this.username =
        decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
        ];
      this.email =
        decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
        ];
      this.role =
        decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];
    } else {
      this.isAuth = false;
      this.username = "";
      this.email = "";
      this.role = "";
    }
  }
}

const authStore = new AuthStore();
export default authStore;
