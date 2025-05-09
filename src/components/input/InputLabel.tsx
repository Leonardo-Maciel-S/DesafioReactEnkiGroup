import { useLocation } from "react-router-dom";

import "./inputLabel.scss";

import { IApiRequest } from "../../@types/todo/apiRequests";

import { ChevronDown } from "lucide-react";
import { useCreateTodo } from "../../hooks/useCreateTodo";
import { useGetTodoByStatus } from "../../hooks/useGetTodoByStatus";
import { useToggleCheckOrUnCheckAll } from "../../hooks/useToggleCheckOrUnCheckAll";

export const InputLabel = ({ service }: { service: IApiRequest }) => {
  const location = useLocation();

  const isDone = location.pathname === "/completed";
  const inHome = location.pathname === "/";

  const { handleToggleCheck } = useToggleCheckOrUnCheckAll(service);
  const { handleSubmit, titleRef } = useCreateTodo(service);
  const { todoListFiltered, data } = useGetTodoByStatus({
    service,
    isDone: isDone,
  });

  let hasTodoInListFiltered = todoListFiltered.length > 0;
  let hasTodoNotCompleted = data.filter((todo) => !todo.isDone).length > 0;

  return (
    <form onSubmit={handleSubmit} className="inputLabel-container">
      {(hasTodoInListFiltered || inHome) && (
        <button
          type="button"
          onClick={() => {
            handleToggleCheck(hasTodoNotCompleted);
          }}
        >
          <ChevronDown
            size={35}
            color={hasTodoInListFiltered ? "black" : "gray"}
          />
        </button>
      )}

      <input ref={titleRef} type="text" placeholder="What needs to be done?" />
    </form>
  );
};
