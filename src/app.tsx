import { InputLabel } from "./components/input/InputLabel";

import "./app.scss";
import { TodoList } from "./components/todoList/TodoList";
import { ChevronDown } from "lucide-react";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TodoListFilter } from "./components/todoListFilter/TodoListFilter";
import { TodoAPI } from "./services/todoApi";
import { AxiosHttpClient } from "./http/httpClients/axiosHttpClient";

export default function App() {
  const todoAPI = new TodoAPI(new AxiosHttpClient());

  return (
    <section>
      <h1>todos</h1>

      <main className="">
        <InputLabel icon={ChevronDown} />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoList todoAPI={todoAPI} />} />
            <Route
              path="/active"
              element={<TodoListFilter todoAPI={todoAPI} />}
            />
            <Route
              path="/completed"
              element={<TodoListFilter todoAPI={todoAPI} />}
            />

            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </main>
    </section>
  );
}
