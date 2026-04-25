import { useState } from "react";
import Title from "./Title";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

const initialTodos = [{ id: "1", text: "Wash my hands"}, { id: "2", text: "Walk the dog"}]

const Home = () => {
  const [todosFromAPI, setTodosFromAPI] = useState(initialTodos)

  function handleAddTodo(todoText) {
    const newTodo = { id: todosFromAPI.length + 1 + "", text: todoText }
    setTodosFromAPI(prevTodos => ([...prevTodos, newTodo]))
  }

  function handleDeleteTodo(todoId) {
    setTodosFromAPI(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <div className="todo-wrapper">
        <Title />

        <div className="todo-card">
          <TodoInput onAddTodo={handleAddTodo} />
          <TodoList todos={todosFromAPI} onDeleteTodo={handleDeleteTodo} />
          <TodoFooter todosCount={todosFromAPI.length} />
        </div>
      </div>
    </div>
  );
};

export default Home;