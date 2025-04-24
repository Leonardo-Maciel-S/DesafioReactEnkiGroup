import { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";
import { AxiosHttpClient } from "../../http/httpClients/axiosHttpClient";
import { ToDoItem } from "../../@types/todo/toDoItem";
import { TodoAPI } from "../../services/todoApi";

import "./inputLabel.scss";

export const InputLabel = ({ icon: Icon }: { icon: LucideIcon }) => {
  const [teste, setTeste] = useState<ToDoItem[]>();

  const getTest = async () => {
    const todoApi = new TodoAPI(new AxiosHttpClient());

    const data = await todoApi.getAll();
    setTeste(data);
  };

  useEffect(() => {
    getTest();
  }, []);

  return (
    <div className="inputLabel-container">
      <button type="button">
        <Icon size={35} />
      </button>
      <input type="text" placeholder="What needs to be done?" />
    </div>
  );
};
