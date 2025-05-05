import { useQuery } from "@tanstack/react-query";
import { TodoAPI } from "../../services/todoApi";
import { AxiosHttpClient } from "../../http/httpClients/axiosHttpClient";
import { ToDoItem } from "../../@types/todo/toDoItem";
import { TodoItem } from "../todoItem/TodoItem";
import { useLocation } from "react-router-dom";

export const TodoList = () => {
  const location = useLocation();

  const filter = location.pathname === "/active";

  const todoApi = new TodoAPI(new AxiosHttpClient());

  const { data, isLoading } = useQuery<ToDoItem[]>({
    queryKey: ["todos"],
    queryFn: () => todoApi.getAll(),
  });

  if (isLoading || !data) <p>Carregando...</p>;

  return (
    <div>
      {data?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
