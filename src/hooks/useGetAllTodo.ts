import { useQuery } from "@tanstack/react-query";
import { ToDoItem } from "../@types/todo/toDoItem";
import { IApiRequest } from "../@types/todo/apiRequests";

export const useGetAllTodo = (todoAPI: IApiRequest) => {
  let { data } = useQuery<ToDoItem[]>({
    queryKey: ["allTodos"],
    queryFn: () => todoAPI.getAll(),
  });

  if (!data) {
    data = [];
  }

  return { data };
};
