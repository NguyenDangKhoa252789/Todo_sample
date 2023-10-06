import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
function Task({ todo }) {
  // const[isChecked,setIsChecked]=useState(false);
  // const[backGroundChange,setbackGroundChange]=useState('unCheckedChange');
  // const[backGroundPlaceChange,setbackGroundPlaceChange]=useState('place');
  // const handleCheckboxChange =()=>{
  //   setIsChecked(!isChecked);
  //   setbackGroundChange(!isChecked? 'checkedChange':'unCheckedChange');
  //   setbackGroundPlaceChange(!isChecked ? 'place2':'place')
  // }
  return (
    <label>
      <div className="unCheckedChange">
        <span>{todo.title}</span>
      </div>
    </label>
  );
}

export default Task;
