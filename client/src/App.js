import { useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoList = (todoInput) => {
    setTodoItems((prevItems) => {
      return [...prevItems, todoInput];
    });
  };

  return (
    <div>
      <h1>TODO APP WITH MERN</h1>
      <TodoForm addTodoList={addTodoList} />
      <TodoList todoItems={todoItems} />
      <div>TASK LIST</div>
    </div>
  );
}

export default App;
