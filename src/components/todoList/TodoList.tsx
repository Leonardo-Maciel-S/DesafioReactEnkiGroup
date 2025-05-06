import { TodoItem } from "../todoItem/TodoItem";
import { useGetAllTodo } from "../../hooks/useGetAllTodo";
import { IApiRequest } from "../../@types/todo/apiRequests";

interface TodoListProps {
  todoAPI: IApiRequest;
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
