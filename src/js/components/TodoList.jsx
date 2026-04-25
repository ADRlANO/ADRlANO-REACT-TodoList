const TodoList = (props) => {
  return (
    <ul className="list-group list-group-flush">
      {props.todos.map(todo => (
        <li className="list-group-item d-flex justify-content-between align-items-center todo-item">
          <span>{todo.text}</span>
          <span className="delete-todo-action text-danger" onClick={() => props.onDeleteTodo(todo.id)}>×</span>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;

