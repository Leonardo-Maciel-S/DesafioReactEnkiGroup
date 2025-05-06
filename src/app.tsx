import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AxiosHttpClient } from "./http/httpClients/axiosHttpClient";

import { TodoAPI } from "./services/todoApi";

import "./app.scss";

import { InputLabel } from "./components/input/InputLabel";
import { TodoList } from "./components/todoList/TodoList";
import { ChevronDown } from "lucide-react";
import { Footer } from "./components/footer/Footer";
import { TodoListFilter } from "./components/todoListFilter/TodoListFilter";

export default function App() {
  const todoAPI = new TodoAPI(new AxiosHttpClient());

  return (
    <section>
      <h1>todos</h1>

      <main className="">
        <InputLabel service={todoAPI} icon={ChevronDown} />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoList todoAPI={todoAPI} />} />
            <Route
              path="/active"
              element={<TodoListFilter isDone={false} todoAPI={todoAPI} />}
            />
            <Route
              path="/completed"
              element={<TodoListFilter isDone={true} todoAPI={todoAPI} />}
            />

            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>

          <Footer todoAPI={todoAPI} />
        </BrowserRouter>
      </main>
    </section>
  );
}
