import "./components/todo/todo.css";
import TodoData from "./components/todo/todoData";
import TodoNew from "./components/todo/todoNew";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning English" },
    { id: 2, name: "Learning chinese" },
  ]);
  const hoidanit = "eric";
  const age = 25;
  const data = {
    address: "HCM",
    country: "Viet Nam",
  };
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={hoidanit} age={age} data={data} todoList={todoList} />
      <div className="todo-image">
        <img className="logo" src={reactLogo} />
      </div>
    </div>
  );
};

export default App;
