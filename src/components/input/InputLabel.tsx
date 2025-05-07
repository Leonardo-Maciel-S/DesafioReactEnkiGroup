import { LucideIcon } from "lucide-react";

import "./inputLabel.scss";
import { useCreateTodo } from "../../hooks/useCreateTodo";
import { IApiRequest } from "../../@types/todo/apiRequests";
import { useGetTodoByStatus } from "../../hooks/useGetTodoByStatus";
import { useToggleCheckOrUnCheckAll } from "../../hooks/useToggleCheckOrUnCheckAll";

export const InputLabel = ({
  icon: Icon,
  service,
}: {
  icon: LucideIcon;
  service: IApiRequest;
}) => {
  const { handleSubmit, titleRef } = useCreateTodo(service);
  const { todoListFiltered } = useGetTodoByStatus({ service, isDone: false });
  const { handleToggleCheck } = useToggleCheckOrUnCheckAll(service);

  let hasTodoNotComplete = todoListFiltered && todoListFiltered?.length > 0;

  if (hasTodoNotComplete === undefined) {
    hasTodoNotComplete = false;
  }

  const colorButton = hasTodoNotComplete ? "black" : "gray";

  return (
    <form onSubmit={handleSubmit} className="inputLabel-container">
      <button
        type="button"
        onClick={() => {
          handleToggleCheck(hasTodoNotComplete);
        }}
      >
        <Icon size={35} color={colorButton} />
      </button>
      <input ref={titleRef} type="text" placeholder="What needs to be done?" />
    </form>
  );
};
