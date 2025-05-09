import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiRequest } from "../@types/todo/apiRequests";
import { ToDoItem } from "../@types/todo/toDoItem";

export const useDeleteAllCompleted = ({
  service,
  todos,
}: {
  service: IApiRequest;
  todos: ToDoItem[];
}) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async () => {
      await service.deleteCompleted(todos);

      return;
    },

    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries(["allTodos"]);
      }, 100);
    },
  });

  const handleDeleteAllCompleted = () => {
    mutate();
  };

  return { handleDeleteAllCompleted };
};
