import { InputLabel } from "./components/input/InputLabel";

import "./app.scss";
import { TodoList } from "./components/todoList/TodoList";

export default function App() {
  return (
    <section>
      <h1>todos</h1>

      <main className="">
        <InputLabel />

        <TodoList />
      </main>
    </section>
  );
}
