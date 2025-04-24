import { NavLink } from "react-router-dom";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div>Items left!</div>

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
