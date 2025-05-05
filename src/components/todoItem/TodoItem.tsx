import { Circle, CircleCheck } from "lucide-react";
import { ToDoItem } from "../../@types/todo/toDoItem";

import "./todoItem.scss";
import { useCheckTodo } from "../../hooks/useCheckTodo";
import { TodoAPI } from "../../services/todoApi";
import { AxiosHttpClient } from "../../http/httpClients/axiosHttpClient";

interface TodoItemProps {
  todo: ToDoItem;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const todoApi = new TodoAPI(new AxiosHttpClient());

  const { mutate } = useCheckTodo({ todo, todoApi });

  const handleCheck = () => {
    mutate();
  };

  return (
    <div className="todoItem-container">
      <button type="button" onClick={handleCheck}>
        {todo.isDone && <CircleCheck size={35} strokeWidth={1} color="green" />}

        {!todo.isDone && <Circle size={35} strokeWidth={1} color="gray" />}
      </button>

      <input
        type="text"
        defaultValue={todo.title}
        className={`${todo.isDone && "isChecked"}`}
      />
    </div>
  );
};
