import { LucideIcon } from "lucide-react";

import "./inputLabel.scss";

export const InputLabel = ({ icon: Icon }: { icon: LucideIcon }) => {
  const handleClick = () => {
    console.log("teste");
  };
  return (
    <div className="inputLabel-container">
      <button type="button" onClick={handleClick}>
        <Icon size={35} />
      </button>
      <input type="text" placeholder="What needs to be done?" />
    </div>
  );
};
