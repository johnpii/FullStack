import RegisterData from "../types/RegisterData";
import LoginData from "../types/LoginData";
import axiosInstance from "../utils/axiosInstance";
import authStore from "../stores/AuthStore";

export const register = async (data: RegisterData) => {
  try {
    const response = await axiosInstance.post("api/Auth/Regist", data);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const login = async (data: LoginData) => {
  try {
    const response = await axiosInstance.post("api/Auth/Login", data);
    authStore.checkAuth();
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.get("api/Auth/Logout");
    authStore.checkAuth();
    return response.data;
  } catch (error) {
    throw error;
  }
};
