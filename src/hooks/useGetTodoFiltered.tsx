import { useQuery } from "@tanstack/react-query";
import { TodoAPI } from "../services/todoApi";
import { ToDoItem } from "../@types/todo/toDoItem";

interface useGetTodoFilteredProps {
  isDone: boolean;
  todoAPI: TodoAPI;
  url: string;
}

export const useGetTodosByCompletionStatus = ({
  isDone,
  todoAPI,
  url,
}: useGetTodoFilteredProps) => {
  const getTodoFilter = async () => {
    const todos = await todoAPI.getTodosByCompletionStatus(isDone);

    return todos;
  };

  const { data, isLoading } = useQuery<ToDoItem[]>({
    queryKey: ["filtered", url],
    queryFn: () => getTodoFilter(),
  });

  return { data, isLoading };
};
