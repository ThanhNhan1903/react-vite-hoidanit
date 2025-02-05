const TodoData = (props) => {
  //props là một object {}
  // {
  //   name:eric,
  //   age:25,
  //   data:{}
  // }
  const { name, age, data } = props;
  // const name = props.name;
  // const age= props.age;
  // const data=props.data;
  // console.log("check props: ", props);
  return (
    <div className="todo-data">
      <div>My name is {props.name}</div>
      <div>Learning english</div>
      <div>Learning chinese</div>
    </div>
  );
};
export default TodoData;
