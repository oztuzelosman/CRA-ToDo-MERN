import TodoShow from "./TodoShow";
function TodoList({ todoItems, deleteById, updateById }) {
  return (
    <div>
      {todoItems.map((todoItem) => {
        return (
          <div key={todoItem.id}>
            <TodoShow
              todoItem={todoItem}
              deleteById={deleteById}
              updateById={updateById}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
