import { userApi } from "../../services/api";

export function setUserLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const userJSON = localStorage.getItem("user");

  if (!userJSON) {
    return null;
  }

  const user = JSON.parse(userJSON);
  return user ?? null;
}

export async function LoginRequest(email, password) {
  try {
    const request = await userApi.post("login", { email, password });
    return request.data;
  } catch (error) {
    return null;
  }
}
