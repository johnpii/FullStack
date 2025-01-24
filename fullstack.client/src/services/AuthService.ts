import axios from "axios";
import RegisterData from "../types/RegisterData";
import LoginData from "../types/LoginData";

export const register = async (data: RegisterData) => {
  try {
    const response = await axios.post("api/Auth/Regist", data);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const login = async (data: LoginData) => {
  try {
    const response = await axios.post("api/Auth/Login", data);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get("api/Auth/Logout");
    return response.data;
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
};
