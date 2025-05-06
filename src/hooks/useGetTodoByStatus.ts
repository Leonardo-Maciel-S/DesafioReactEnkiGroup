import { IApiRequest } from "../@types/todo/apiRequests";
import { useGetAllTodo } from "./useGetAllTodo";

type useGetTodoByStatusProps = {
  service: IApiRequest;
  isDone: boolean;
};

export const useGetTodoByStatus = ({
  service,
  isDone,
}: useGetTodoByStatusProps) => {
  const { data } = useGetAllTodo(service);

  const todoListFiltered = data?.filter((todo) => todo.isDone === isDone);

  return {
    todoListFiltered,
  };
};
