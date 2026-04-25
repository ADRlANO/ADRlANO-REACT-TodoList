const TodoList = () => {
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item d-flex justify-content-between align-items-center todo-item">
        <span>Wash my hands</span>
        <span className="text-danger">×</span>
      </li>

      <li className="list-group-item d-flex justify-content-between align-items-center todo-item">
        <span>Make the bed</span>
        <span className="text-danger">×</span>
      </li>

      <li className="list-group-item d-flex justify-content-between align-items-center todo-item">
        <span>Walk the dog</span>
        <span className="text-danger">×</span>
      </li>
    </ul>
  );
};

export default TodoList;