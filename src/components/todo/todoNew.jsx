const TodoNew = (props) => {
  // console.log("check props2: ", props);
  const { addNewTodo } = props;
  // addNewTodo("eric");
  return (
    <div className="todo-new">
      <input type="text" placeholder="Enter your task" />
      <button>Add</button>
    </div>
  );
};
export default TodoNew;
