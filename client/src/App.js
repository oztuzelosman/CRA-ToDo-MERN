import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const serverUrl = "https://lih0od-8080.csb.app/";

function App() {
  //array that we use for listing todos
  const [todoItems, setTodoItems] = useState([]);

  //getting all todos from server

  const fetchTodos = async () => {
    const response = await axios.get("https://lih0od-8080.csb.app/");
    console.log(response);
    setTodoItems(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  //add new books
  const addTodoList = (todoInput) => {
    setTodoItems((prevItems) => {
      return [...prevItems, { id: uuidv4(), name: todoInput }];
    });
  };

  //delete books
  const deleteById = (deleteId) => {
    setTodoItems(() => {
      return todoItems.filter((todoItem) => {
        console.log(todoItem.id);
        return todoItem.id !== deleteId;
      });
    });
  };

  //update books by id
  const updateById = (updateId, newName) => {
    setTodoItems(() => {
      return todoItems.map((todoItem) => {
        if (updateId === todoItem.id) {
          return { ...todoItem, name: newName };
        } else {
          return todoItem;
        }
      });
    });
  };

  return (
    <div>
      <h1>TODO APP WITH MERN</h1>
      <TodoForm addTodoList={addTodoList} />
      <TodoList
        todoItems={todoItems}
        deleteById={deleteById}
        updateById={updateById}
      />
    </div>
  );
}

export default App;
