const TodoNew = (props) => {
  // console.log("check props2: ", props);
  const { addNewTodo } = props;
  // addNewTodo("eric");
  const handleClick = () => {
    alert("click me");
  };
  const handleOnchange = (event) => {
    console.log(event);
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
    </div>
  );
};
export default TodoNew;
