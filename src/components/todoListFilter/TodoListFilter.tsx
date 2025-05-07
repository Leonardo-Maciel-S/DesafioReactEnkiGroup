import { IApiRequest } from "../../@types/todo/apiRequests";
import { useGetTodoByStatus } from "../../hooks/useGetTodoByStatus";
import { TodoItem } from "../todoItem/TodoItem";

interface TodoListFilterProps {
  service: IApiRequest;
  isDone: boolean;
}

export const TodoListFilter = ({ service, isDone }: TodoListFilterProps) => {
  const { todoListFiltered } = useGetTodoByStatus({
    service: service,
    isDone,
  });

  return (
    <div>
      {todoListFiltered?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} service={service} />
      ))}
    </div>
  );
};
