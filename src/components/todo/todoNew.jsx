import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("Eric");
  const { addNewTodo } = props;
  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };
  const handleOnchange = (name) => {
    setValueInput(name);
  };
  return (
    <div className="todo-new">
      <input
        type="text"
        value={valueInput}
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
