function TodoShow({ name }) {
  return (
    <div>
      <h3> {name}</h3>
      <div>
        <button>EDIT</button>
        <button>DELETE</button>
      </div>
    </div>
  );
}

export default TodoShow;
