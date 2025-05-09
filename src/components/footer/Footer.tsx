import { NavLink } from "react-router-dom";

import "./footer.scss";

import { useGetTodoByStatus } from "../../hooks/useGetTodoByStatus";
import { IApiRequest } from "../../@types/todo/apiRequests";
import { useDeleteAllCompleted } from "../../hooks/useDeleteAllCompleted";

export const Footer = ({ service }: { service: IApiRequest }) => {
  const { todoListFiltered, data } = useGetTodoByStatus({
    service,
    isDone: false,
  });

  const { handleDeleteAllCompleted } = useDeleteAllCompleted({
    service,
    todos: data,
  });

  return (
    <>
      {data?.length > 0 && (
        <footer>
          <div>{todoListFiltered?.length} Items left!</div>

          <div className="btn-status-container">
            <NavLink to={"/"} className="btnStatus">
              All
            </NavLink>
            <NavLink to={"/active"} className="btnStatus">
              Active
            </NavLink>
            <NavLink to={"/completed"} className="btnStatus">
              Completed
            </NavLink>
          </div>

          <button
            type="button"
            className="btnClear"
            onClick={handleDeleteAllCompleted}
          >
            Clear completed
          </button>
        </footer>
      )}
    </>
  );
};
