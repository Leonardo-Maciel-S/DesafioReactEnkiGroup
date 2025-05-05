import { TodoAPI } from "../../services/todoApi";
import { TodoItem } from "../todoItem/TodoItem";
import { useGetAllTodo } from "../../hooks/useGetAllTodo";

interface TodoListProps {
  todoAPI: TodoAPI;
}

export const TodoList = ({ todoAPI }: TodoListProps) => {
  const { data } = useGetAllTodo(todoAPI);

  return (
    <div>
      {data?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
