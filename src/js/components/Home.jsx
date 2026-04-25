import Title from "./Title";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

const Home = () => {
  return (
    <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <div className="todo-wrapper">
        <Title />

        <div className="todo-card">
          <TodoInput />
          <TodoList />
          <TodoFooter />
        </div>
      </div>
    </div>
  );
};

export default Home;