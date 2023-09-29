import "./Buttons.css";

const AddNewBtn = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    // eslint-disable-next-line react/prop-types
    <button className="button-1">{props.text ? props.text : "Add task"}</button>
  );
};
export default AddNewBtn;
