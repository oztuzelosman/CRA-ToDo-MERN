import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const serverUrl = "http://localhost:8080/api/v1/todos";

function App() {
  //array that we use for listing todos
  const [todoItems, setTodoItems] = useState([]);

  //getting all todos from server

  const fetchTodos = async () => {
    const response = await axios.get(`${serverUrl}`);
    console.log(response);
    setTodoItems(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  //add new books
  const addTodoList = async (todoInput) => {
    const createResponse = await axios.post(`${serverUrl}`, {
      name: todoInput,
    });

    setTodoItems((prevItems) => {
      return [...prevItems, createResponse.data];
    });
  };

  //delete books
  const deleteById = async (deleteId) => {
    await axios.delete(`${serverUrl}/${deleteId}`);

    setTodoItems(() => {
      return todoItems.filter((todoItem) => {
        return todoItem._id !== deleteId;
      });
    });
  };

  //update books by id
  const updateById = async (updateId, newName) => {
    const updateResponse = await axios.patch(`${serverUrl}/${updateId}`, {
      name: newName,
    });

    setTodoItems(() => {
      return todoItems.map((todoItem) => {
        if (updateId === todoItem._id) {
          return { ...todoItem, ...updateResponse.data };
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
