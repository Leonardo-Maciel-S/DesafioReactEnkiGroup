import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToDoItem } from "../@types/todo/toDoItem";
import { IApiRequest } from "../@types/todo/apiRequests";

interface useCheckTodoProps {
  todo: ToDoItem;
  service: IApiRequest;
}

export const useCheckTodo = ({ todo, service }: useCheckTodoProps) => {
  const useClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => {
      const data = service.check(todo.id, {
        ...todo,
        isDone: !todo.isDone,
      });

      return data;
    },

    onSuccess: () => {
      useClient.invalidateQueries({
        queryKey: ["allTodos"],
      });

      useClient.invalidateQueries({
        queryKey: ["filtered"],
      });
    },
  });

  return {
    toggleCheck: mutate,
  };
};
