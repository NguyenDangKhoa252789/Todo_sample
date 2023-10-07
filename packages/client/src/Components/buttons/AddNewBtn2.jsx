/* eslint-disable react/prop-types */
import "./Buttons.css";

const AddNewBtn2 = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    // eslint-disable-next-line react/prop-types
    <button className="button-2" onClick={props.onClick}>
      {props.text ? props.text : "Add task"}
    </button>
  );
};
export default AddNewBtn2;
