import { Circle, CircleCheck } from "lucide-react";
import { ToDoItem } from "../../@types/todo/toDoItem";

import { useCheckTodo } from "../../hooks/useCheckTodo";
import { IApiRequest } from "../../@types/todo/apiRequests";

import "./todoItem.scss";

import { useDeleteTodo } from "../../hooks/useDeleteTodo";
import { useEditTodo } from "../../hooks/useEditTodo";
import { useState } from "react";

interface TodoItemProps {
  todo: ToDoItem;
  service: IApiRequest;
}

export const TodoItem = ({ todo, service }: TodoItemProps) => {
  const [readOnly, setReadOnly] = useState(true);
  const prevTitle = todo.title;

  const { toggleCheck } = useCheckTodo({ todo, service });
  const { handleDelete } = useDeleteTodo(service);
  const { inputRef, handleSubmit } = useEditTodo({ service, todo });

  const handleDoubleClick = () => {
    setReadOnly(false);

    setTimeout(() => {
      inputRef.current?.classList.add("focus");

      const input = inputRef.current;

      if (!input) return;
      input.selectionStart = input.selectionEnd = input.value.length;
    }, 0);
  };

  const handleBlur = () => {
    setReadOnly(true);

    if (inputRef.current && !inputRef.current?.value) {
      inputRef.current.value = prevTitle;
    }

    setTimeout(() => {
      inputRef.current?.classList.remove("focus");
    }, 0);
  };

  return (
    <form className="todoItem-container" onSubmit={handleSubmit}>
      <button type="button" onClick={() => toggleCheck()}>
        {todo.isDone && <CircleCheck size={35} strokeWidth={1} color="green" />}

        {!todo.isDone && <Circle size={35} strokeWidth={1} color="gray" />}
      </button>

      <input
        type="text"
        defaultValue={todo.title}
        className={`${todo.isDone && "isChecked"}`}
        ref={inputRef}
        readOnly={readOnly}
        onDoubleClick={handleDoubleClick}
        onBlur={handleBlur}
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
