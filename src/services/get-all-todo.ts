import { IHttpClient } from "../@types/http/httpClient";
import { ToDoItem } from "../@types/todo/toDoItem";

export async function getAllTodo(httpClient: IHttpClient) {
  const data = await httpClient.request<ToDoItem[]>({
    method: "get",
    url: "http://localhost:3333/todos",
  });

  return data;
}
