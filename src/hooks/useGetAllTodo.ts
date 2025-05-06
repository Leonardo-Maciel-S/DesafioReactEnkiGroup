import { useQuery } from "@tanstack/react-query";
import { ToDoItem } from "../@types/todo/toDoItem";
import { TodoAPI } from "../services/todoApi";

export const useGetAllTodo = (todoAPI: TodoAPI) => {
  const { data } = useQuery<ToDoItem[]>({
    queryKey: ["allTodos"],
    queryFn: () => todoAPI.getAll(),
  });

  return { data };
};
