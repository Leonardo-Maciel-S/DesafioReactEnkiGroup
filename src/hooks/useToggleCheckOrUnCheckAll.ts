import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiRequest } from "../@types/todo/apiRequests";
import { useGetAllTodo } from "./useGetAllTodo";

export const useToggleCheckOrUnCheckAll = (service: IApiRequest) => {
  const queryClient = useQueryClient();

  const { data: todos } = useGetAllTodo(service);

  const { mutate } = useMutation({
    mutationFn: async (isDone: boolean) => {
      await service.toggleCheckOrUnCheckAll(todos, isDone);

      return;
    },

    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries(["allTodos"]);
      }, 100);
    },
  });

  const handleToggleCheck = (isDone: boolean) => {
    mutate(isDone);
  };

  return { handleToggleCheck };
};
