import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiRequest } from "../@types/todo/apiRequests";
import { FormEvent, useRef } from "react";

export const useCreateTodo = (service: IApiRequest) => {
  const titleRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async () => {
      if (!titleRef.current) return;

      const response = await service.create({
        title: titleRef.current.value,
        isDone: false,
      });

      titleRef.current.value = "";

      return response;
    },

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["allTodos"] }),
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    mutate();
  };

  return {
    handleSubmit,
    titleRef,
  };
};
