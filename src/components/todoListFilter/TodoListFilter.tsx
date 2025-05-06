import { useGetTodoByStatus } from "../../hooks/useGetTodoByStatus";
import { TodoAPI } from "../../services/todoApi";
import { TodoItem } from "../todoItem/TodoItem";

interface TodoListFilterProps {
  todoAPI: TodoAPI;
  isDone: boolean;
}

export const TodoListFilter = ({ todoAPI, isDone }: TodoListFilterProps) => {
  const { todoListFiltered } = useGetTodoByStatus({
    service: todoAPI,
    isDone,
  });

  return (
    <div>
      {todoListFiltered?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
