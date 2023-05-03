import TodoShow from "./TodoShow";
function TodoList({ todoItems }) {
  return (
    <div>
      {todoItems.map((todoItem) => {
        return (
          <div key={todoItem}>
            <TodoShow name={todoItem} />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
