import { NavLink } from "react-router-dom";
import { TodoAPI } from "../../services/todoApi";

import "./footer.scss";

import { useGetTodoByStatus } from "../../hooks/useGetTodoByStatus";

export const Footer = ({ todoAPI }: { todoAPI: TodoAPI }) => {
  const { todoListFiltered } = useGetTodoByStatus({
    service: todoAPI,
    isDone: false,
  });

  return (
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

      <button type="button" className="btnClear">
        Clear completed
      </button>
    </footer>
  );
};
