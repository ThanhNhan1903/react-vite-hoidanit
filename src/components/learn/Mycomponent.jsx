//Component = html + css + js
//JSX: 1 prarent
//fragment
import "./style.css";
const MyComponent = () => {
  return (
    <>
      <div>eric & hoidanit update</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};
export default MyComponent;
