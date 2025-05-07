import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IApiRequest } from "../@types/todo/apiRequests";
import { ToDoItem } from "../@types/todo/toDoItem";
import { FormEvent, useRef } from "react";

type useEditTodoProps = {
  service: IApiRequest;
  todo: ToDoItem;
};

export const useEditTodo = ({ service, todo }: useEditTodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async () => {
      if (!inputRef.current) return;

      const data = await service.edit(todo.id, {
        id: todo.id,
        title: inputRef.current.value,
        isDone: todo.isDone,
      });

      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["allTodos"]);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    mutate();

    if (!inputRef.current) return;

    inputRef.current.blur();
  };

  return { handleSubmit, inputRef };
};
