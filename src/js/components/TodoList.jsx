const TodoList = (props) => {
  return (
    <ul className="list-group list-group-flush">
      {props.todos.map(todo => (
        <li className="list-group-item d-flex justify-content-between align-items-center todo-item">
          <span>{todo.label}</span>
          <div style={{ display: "flex", gap: "12px" }}>
            <span className="text-danger todo-action" onClick={() => props.onToggleTodoStatus(todo.id, !todo.is_done)}>{todo.is_done ? "✅": "❌"}</span>
            <span className="text-danger todo-action" onClick={() => props.onDeleteTodo(todo.id)}>🗑️</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;

