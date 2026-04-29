import { useState, useEffect } from "react";

import Title from "./Title";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

const user = "tumama"
const API_URL = "https://playground.4geeks.com/todo"

const initialTodos = []

const Home = () => {
  const [todosFromAPI, setTodosFromAPI] = useState(initialTodos)

  async function handleAddTodo(todoText) {
    const newTodo = { label: todoText, is_done: false }

    const url = `${API_URL}/todos/${user}`;
    const options = {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: { "Content-Type": "application/json" }
    }
    const response = await fetch(url, options)
    const data = await response.json()

    console.log("handleAddTodo data >>>", data)
    
    await fetchTodos();
  }

  async function handleDeleteTodo(todo_id) {
    const url = `${API_URL}/todos/${todo_id}`
    const options = {
      method: "DELETE"
    }
  
    await fetch(url, options)
    await fetchTodos();
  }



  async function fetchTodos() {
    const response = await fetch(`${API_URL}/users/${user}`);
    const data = await response.json();

    setTodosFromAPI(data.todos)
  }

  async function handleToggleTodoStatus(todo_id, updated_is_done) {
    const updatedTodo = { is_done: updated_is_done }

    const url = `${API_URL}/todos/${todo_id}`
    const options = {
      method: "PUT",
      body: JSON.stringify(updatedTodo),
      headers: { "Content-Type": "application/json" }
    }

    await fetch(url, options)
    await fetchTodos()
  }

    async function verifyUser() {
    const response = await fetch(`${API_URL}/users/${user}`);

    if (response.status === 404) {
      await fetch(`${API_URL}/users/${user}`, {
        method: "POST",
      });
    }

    await fetchTodos();
  }

  useEffect(() => {
    verifyUser();
  }, [])

  return (
    <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <div className="todo-wrapper">
        <Title />

        <div className="todo-card">
          <TodoInput onAddTodo={handleAddTodo} />
          <TodoList todos={todosFromAPI} onDeleteTodo={handleDeleteTodo} onToggleTodoStatus={handleToggleTodoStatus}/>
          <TodoFooter todosCount={todosFromAPI.length} />
        </div>
      </div>
    </div>
  );
};

export default Home;