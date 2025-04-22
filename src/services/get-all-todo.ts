import { api } from "../http/axios";

export async function getAllTodo() {
  const res = await api.get("/");

  return res.data;
}
