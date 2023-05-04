import { useState } from "react";

function TodoEdit({ updateById, todoItem, toggleEdit }) {
  const [newName, setNewName] = useState("");

  const getNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateById(todoItem.id, newName);
    setNewName("");
    toggleEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={getNewName} />
      <button>todoedit</button>
    </form>
  );
}

export default TodoEdit;
