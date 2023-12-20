// import "./App.css";

import { useState } from "react";
import InputArea from "./components/InputArea";

function App(){

    const[items, inputItems] = useState([]);
    const addItems = (inputText) => {
      inputItems((prevItems) => {
            return[...prevItems, inputText]
      });
    };

  return(
    <div className="container">
      <div className="heading">
        <h1>To_Do_List</h1>
      </div>
      <InputArea addItems={addItems} />
    </div>

  )
}
export default App;