import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiRequest } from "../@types/todo/apiRequests";
import { useRef } from "react";

export const useCreateTodo = (service: IApiRequest) => {
  const titleRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const handleSubmit = async () => {
    if (!titleRef.current) return;

    const response = await service.create({
      title: titleRef.current.value,
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
    titleRef,
  };
};
