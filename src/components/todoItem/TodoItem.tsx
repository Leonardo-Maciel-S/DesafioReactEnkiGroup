import { Circle, CircleCheck } from "lucide-react";
import { ToDoItem } from "../../@types/todo/toDoItem";

import "./todoItem.scss";

interface TodoItemProps {
  todo: ToDoItem;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className="todoItem-container">
      <button type="button">
        {todo.isDone && <CircleCheck size={35} strokeWidth={1} color="green" />}
        {!todo.isDone && <Circle size={35} strokeWidth={1} color="gray" />}
      </button>
      <input
        type="text"
        defaultValue={todo.title}
        style={{ textDecoration: "none" }}
      />
    </div>
  );
};
