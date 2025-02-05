import { useState } from "react";

const TodoNew = (props) => {
  // useState hook
  // const valueInput = "eric";
  const [valueInput, setValueInput] = useState("Eric");
  const { addNewTodo } = props;
  const handleClick = () => {
    addNewTodo(valueInput);
  };
  const handleOnchange = (name) => {
    // console.log(name);
    setValueInput(name);
  };
  return (
    <div className="todo-new">
      <input
        type="text"
        placeholder="Enter your task"
        onChange={(event) => {
          handleOnchange(event.target.value);
        }}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div>my input is : {valueInput} </div>
    </div>
  );
};
export default TodoNew;
