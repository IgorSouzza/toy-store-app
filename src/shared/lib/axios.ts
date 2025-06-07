import axios from "axios";
import { cookies } from "next/headers";

const api = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
