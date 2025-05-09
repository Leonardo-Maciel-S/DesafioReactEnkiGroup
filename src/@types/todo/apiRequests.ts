import { ToDoItem } from "./toDoItem";

export interface IApiRequest {
  getAll: () => Promise<ToDoItem[]>;

  create: (item: Omit<ToDoItem, "id">) => Promise<ToDoItem>;

  check: (id: string, body: ToDoItem) => Promise<ToDoItem>;

  getTodosByCompletionStatus: (isDone: boolean) => Promise<ToDoItem[]>;

  delete: (id: string) => Promise<ToDoItem>;

  edit: (id: string, body: ToDoItem) => Promise<ToDoItem>;

  toggleCheckOrUnCheckAll: (todos: ToDoItem[], isDone: boolean) => void;

  deleteCompleted: (todos: ToDoItem[]) => void;
}
