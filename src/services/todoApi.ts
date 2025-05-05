import { IHttpClient } from "../@types/http/httpClient";
import { IApiRequest } from "../@types/todo/apiRequests";
import { ToDoItem } from "../@types/todo/toDoItem";

export class TodoAPI implements IApiRequest {
  constructor(private httpClient: IHttpClient) {}

  async getAll<ToDoItem>(): Promise<ToDoItem[]> {
    const data = await this.httpClient.request<ToDoItem[]>({
      method: "get",
      url: "http://localhost:3333/todos",
    });

    return data;
  }

  async create(item: Omit<ToDoItem, "id">): Promise<ToDoItem> {
    const data = await this.httpClient.request<ToDoItem>({
      method: "post",
      url: "http://localhost:3333/todos",
      body: JSON.stringify(item),
    });

    return data;
  }

  async check(id: string, body: ToDoItem): Promise<ToDoItem> {
    const data = await this.httpClient.request<ToDoItem>({
      method: "put",
      url: `http://localhost:3333/todos/${id}`,
      body: JSON.stringify(body),
    });

    return data;
  }
}
