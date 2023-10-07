/* eslint-disable react/prop-types */
import "./Buttons.css";

const AddNewBtn = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    // eslint-disable-next-line react/prop-types
    <button className="button-1" onClick={props.onClick}>
      {props.text ? props.text : "Add new task"}
    </button>
  );
};
export default AddNewBtn;
