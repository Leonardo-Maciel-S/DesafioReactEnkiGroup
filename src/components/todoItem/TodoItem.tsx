import { Circle, CircleCheck } from "lucide-react";
import { ToDoItem } from "../../@types/todo/toDoItem";

import { useCheckTodo } from "../../hooks/useCheckTodo";
import { IApiRequest } from "../../@types/todo/apiRequests";

import "./todoItem.scss";
import { useDeleteTodo } from "../../hooks/useDeleteTodo";

interface TodoItemProps {
  todo: ToDoItem;
  service: IApiRequest;
}

export const TodoItem = ({ todo, service }: TodoItemProps) => {
  const { toggleCheck } = useCheckTodo({ todo, service });
  const { handleDelete } = useDeleteTodo(service);

  return (
    <form className="todoItem-container">
      <button type="button" onClick={() => toggleCheck()}>
        {todo.isDone && <CircleCheck size={35} strokeWidth={1} color="green" />}

        {!todo.isDone && <Circle size={35} strokeWidth={1} color="gray" />}
      </button>

      <input
        type="text"
        defaultValue={todo.title}
        className={`${todo.isDone && "isChecked"}`}
      />

      <button
        type="button"
        className="btn-delete"
        onClick={() => handleDelete(todo.id)}
      >
        X
      </button>
    </form>
  );
};
