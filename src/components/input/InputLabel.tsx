import { LucideIcon } from "lucide-react";

import "./inputLabel.scss";
import { useCreateTodo } from "../../hooks/useCreateTodo";
import { IApiRequest } from "../../@types/todo/apiRequests";

export const InputLabel = ({
  icon: Icon,
  service,
}: {
  icon: LucideIcon;
  service: IApiRequest;
}) => {
  const { handleSubmit, titleRef } = useCreateTodo(service);

  return (
    <form onSubmit={handleSubmit} className="inputLabel-container">
      <button type="button">
        <Icon size={35} />
      </button>
      <input ref={titleRef} type="text" placeholder="What needs to be done?" />
    </form>
  );
};
