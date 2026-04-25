const TodoFooter = (props) => {
  return (
    <div className="todo-footer border-top">
      {props.todosCount} items left
    </div>
  );
};

export default TodoFooter;