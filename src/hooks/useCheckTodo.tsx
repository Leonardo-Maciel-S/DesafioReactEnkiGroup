import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToDoItem } from "../@types/todo/toDoItem";
import { IApiRequest } from "../@types/todo/apiRequests";

interface useCheckTodoProps {
  todo: ToDoItem;
  todoApi: IApiRequest;
}

export const useCheckTodo = ({ todo, todoApi }: useCheckTodoProps) => {
  const useClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => {
      const data = todoApi.check(todo.id, {
        ...todo,
        isDone: !todo.isDone,
      });

      return data;
    },

    onSuccess: () => {
      useClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return {
    mutate,
  };
};
