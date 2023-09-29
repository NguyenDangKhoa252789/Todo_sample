import React from "react";
import './App.css'

import { Selectbox,Task,Title,Add_new_task_btn } from "./Components";

function App() {
  return (
    <React.Fragment>
        <Title/>
      <div>
        <Add_new_task_btn/>
        <Selectbox/>
      </div>
        <Task/>
    </React.Fragment>
  )
}

export default App;
