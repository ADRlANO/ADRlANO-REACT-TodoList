import { useState } from "react";

const TodoInput = (props) => {
  const [inputValue, setInputValue] = useState("")

  function handleEnterPress(e) {
    if (e.key !== 'Enter') return
    
    props.onAddTodo(inputValue)
    setInputValue("")
  }

  return (
    <div className="py-3">
      <input
        type="text"
        placeholder="Mi tarea del dia es.."
        className="form-control input-todo shadow-none"
        value={inputValue}
        onInput={e => setInputValue(e.target.value)}
        onKeyDown={e => handleEnterPress(e)}
      />
    </div>
  );
};

export default TodoInput;
