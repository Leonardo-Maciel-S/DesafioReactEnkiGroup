import { TodoAPI } from "../../services/todoApi";
import { TodoItem } from "../todoItem/TodoItem";
import { useLocation } from "react-router-dom";
import { useGetTodosByCompletionStatus } from "../../hooks/useGetTodoFiltered";

interface TodoListFilterProps {
  todoAPI: TodoAPI;
}

export const TodoListFilter = ({ todoAPI }: TodoListFilterProps) => {
  const location = useLocation();

  const isDone = location.pathname === "/completed";

  const { data, isLoading } = useGetTodosByCompletionStatus({
    isDone,
    todoAPI,
    url: location.pathname,
  });

  return (
    <div>
      {data?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
