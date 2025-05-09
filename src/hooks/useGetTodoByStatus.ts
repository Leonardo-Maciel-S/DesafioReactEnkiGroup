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

  let todoListFiltered = data?.filter((todo) => todo.isDone === isDone);

  if (!todoListFiltered) {
    todoListFiltered = [];
  }

  return {
    todoListFiltered,
    data,
  };
};
