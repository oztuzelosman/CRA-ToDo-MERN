import { useState } from "react";
import TodoEdit from "./TodoEdit";

function TodoShow({ todoItem, deleteById, updateById }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    deleteById(todoItem._id);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div>
      {showEdit ? (
        <TodoEdit
          updateById={updateById}
          todoItem={todoItem}
          showEdit={showEdit}
          toggleEdit={toggleEdit}
        />
      ) : (
        <div>
          <h3> {todoItem.name}</h3>
          <p>{todoItem._id}</p>
          <span>{`Completion state of the todo: ${todoItem.completed}`}</span>
        </div>
      )}

      <div>
        <button onClick={toggleEdit}>EDIT</button>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default TodoShow;
