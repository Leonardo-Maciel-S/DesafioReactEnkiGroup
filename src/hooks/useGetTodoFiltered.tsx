import { useQuery } from "@tanstack/react-query";
import { TodoAPI } from "../services/todoApi";
import { ToDoItem } from "../@types/todo/toDoItem";

interface useGetTodoFilteredProps {
  isDone: boolean;
  todoAPI: TodoAPI;
}

export const useGetTodoFiltered = ({
  isDone,
  todoAPI,
}: useGetTodoFilteredProps) => {
  const getTodoFilter = async () => {
    const todos = await todoAPI.getTodosByCompletionStatus(isDone);

    return todos;
  };

  const { data } = useQuery<ToDoItem[]>({
    queryKey: ["filtered"],
    queryFn: () => getTodoFilter(),
  });

  return { data };
};
