import "./components/todo/todo.css";
import TodoData from "./components/todo/todoData";
import TodoNew from "./components/todo/todoNew";
import reactLogo from "./assets/react.svg";
const App = () => {
  const hoidanit = "eric";
  const age = 25;
  const data = {
    address: "HCM",
    country: "Viet Nam",
  };
  const addNewTodo = (name) => {
    alert(`call me ${name}`);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={hoidanit} age={age} data={data} />
      <div className="todo-image">
        <img className="logo" src={reactLogo} />
      </div>
    </div>
  );
};

export default App;
