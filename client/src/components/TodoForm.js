import { useState } from "react";
function TodoForm({ addTodoList }) {
  const [todoInput, setTodoInput] = useState("");

  const getTodoInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoList(todoInput);
    setTodoInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoInput}
        placeholder="Add a new todo"
        onChange={getTodoInput}></input>
      <button>ADD TODO</button>
    </form>
  );
}

export default TodoForm;
