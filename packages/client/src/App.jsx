import React from "react";
import './App.css'
import PenIcon from "./Components/PenIcon/PenIcon";
import DusBinIcon from "./Components/DusBinIcon/DusBinIcon";
function App() {
  return (
    <>
      <h1 className="title">TODO LIST</h1>
      <div>
        <button className="button-1">Add new task</button>
        <select className="selectbox" name="filter" id="filter">
          <option value="">All</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
      <div className="container">
        <ul>
          <li><input type="checkbox" name="" id="" /><input type="text" size={42} value ="Learn javascript" className="place"/><PenIcon></PenIcon><DusBinIcon></DusBinIcon></li>
          <li><input type="checkbox" name="" id="" /><input type="text" size={42} className="place"/><PenIcon></PenIcon><DusBinIcon></DusBinIcon></li>
          <li><input type="checkbox" name="" id="" /><input type="text" size={42} className="place"/><PenIcon></PenIcon><DusBinIcon></DusBinIcon></li>
        </ul>
      </div>
      
    </>
  )
}

export default App;
