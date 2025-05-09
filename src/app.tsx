import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AxiosHttpClient } from "./http/httpClients/axiosHttpClient";

import { TodoAPI } from "./services/todoApi";

import "./app.scss";

import { InputLabel } from "./components/input/InputLabel";
import { TodoList } from "./components/todoList/TodoList";
import { Footer } from "./components/footer/Footer";
import { TodoListFilter } from "./components/todoListFilter/TodoListFilter";

export default function App() {
  const service = new TodoAPI(new AxiosHttpClient());

  return (
    <section>
      <h1>todos</h1>

      <main className="">
        <BrowserRouter>
          <InputLabel service={service} />

          <Routes>
            <Route path="/" element={<TodoList service={service} />} />
            <Route
              path="/active"
              element={<TodoListFilter isDone={false} service={service} />}
            />
            <Route
              path="/completed"
              element={<TodoListFilter isDone={true} service={service} />}
            />

            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>

          <Footer service={service} />
        </BrowserRouter>
      </main>
    </section>
  );
}
