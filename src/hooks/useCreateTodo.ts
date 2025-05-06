import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiRequest } from "../@types/todo/apiRequests";
import { useRef } from "react";

export const useCreateTodo = (service: IApiRequest) => {
  const title = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const handleSubmit = async () => {
    if (!title.current) return;

    const response = await service.create({
      title: title.current.value,
      isDone: false,
    });

    return response;
  };

  const { mutate } = useMutation({
    mutationFn: () => handleSubmit(),

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["allTodos"] }),
  });

  return {
    mutate,
    title,
  };
};
