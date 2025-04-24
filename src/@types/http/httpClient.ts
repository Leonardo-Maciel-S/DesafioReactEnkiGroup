import { ToDoItem } from "../todo/toDoItem";

export interface IReqParams {
  method: "get" | "post" | "put" | "delete";
  url: string;
  body?: any;
  headers?: any;
}

export interface IHttpClient {
  request: <T>(reqParams: IReqParams) => Promise<T>;
}
