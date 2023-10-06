import React from "react";
import "./App.css";

import { Selectbox, Task, Title, AddNewBtn } from "./components";

function App() {
  return (
    <React.Fragment>
      <Title />
      <div>
        <AddNewBtn />
        <Selectbox />
      </div>
      <Task />
    </React.Fragment>
  );
}

export default App;
