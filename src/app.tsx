import { InputLabel } from "./components/input/InputLabel";

import "./app.scss";
import { TodoList } from "./components/todoList/TodoList";
import { ChevronDown } from "lucide-react";

export default function App() {
  return (
    <section>
      <h1>todos</h1>

      <main className="">
        <InputLabel icon={ChevronDown} />

        <TodoList />
      </main>
    </section>
  );
}
