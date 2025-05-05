import { InputLabel } from "./components/input/InputLabel";

import "./app.scss";
import { TodoList } from "./components/todoList/TodoList";
import { ChevronDown } from "lucide-react";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <section>
      <h1>todos</h1>

      <main className="">
        <InputLabel icon={ChevronDown} />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoList />} />
            {/* <Route path="/active" element={<TodoList />} />
            <Route path="/completed" element={<TodoList />} /> */}
          </Routes>

          <Footer />
        </BrowserRouter>
      </main>
    </section>
  );
}
