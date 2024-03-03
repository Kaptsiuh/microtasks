import React, { useState } from "react";
import "./App.css";
import { NewComponent } from "./components/NewComponent";
import { Button } from "./components/Button";

function App() {
  let [count, setCount] = useState(1);

  const onClickHandler = () => {
    setCount(++count);
  };

  const onClickHandler2 = () => {
    setCount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={onClickHandler2}>0</button>
    </>
  );
}

export default App;
