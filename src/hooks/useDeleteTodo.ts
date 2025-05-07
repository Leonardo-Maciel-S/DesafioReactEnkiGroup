import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiRequest } from "../@types/todo/apiRequests";

export const useDeleteTodo = (service: IApiRequest) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (id: string) => await service.delete(id),

    onSuccess: () => {
      queryClient.invalidateQueries(["allTodos"]);
    },
  });

  return { mutate };
};
