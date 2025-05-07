import { TodoItem } from "../todoItem/TodoItem";
import { useGetAllTodo } from "../../hooks/useGetAllTodo";
import { IApiRequest } from "../../@types/todo/apiRequests";

interface TodoListProps {
  service: IApiRequest;
}

export const TodoList = ({ service }: TodoListProps) => {
  const { data } = useGetAllTodo(service);

  return (
    <div>
      {data?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} service={service} />
      ))}
    </div>
  );
};
