import { IHttpClient } from "../@types/http/httpClient";
import { IApiRequest } from "../@types/todo/apiRequests";
import { ToDoItem } from "../@types/todo/toDoItem";

export class TodoAPI implements IApiRequest {
  constructor(private httpClient: IHttpClient) {}

  async getAll(): Promise<any> {
    const data = await this.httpClient.request<ToDoItem[]>({
      method: "get",
      url: "http://localhost:3333/todos",
    });

    return data;
  }

  create<T>(item: T): T {
    return item;
  }
}
