import React, { useState } from "react";
import "./App.css";
// import { FullInput } from "./components/FullInput";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Input/Button";
// import { NewComponent } from "./components/NewComponent";
// import { Button } from "./components/Button";
// import { NewComponent2 } from "./components/NewComponent2";

function App() {
  const [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
    { message: "message4" },
    { message: "message5" },
  ]);

  const [title, setTitle] = useState("");

  const addMessage = (title: string) => {
    setMessage([{ message: title }, ...message]);
  };

  const callBackButtonHandler = () => {
    addMessage(title);
    setTitle("");
  };

  return (
    <div className="App">
      {/* <FullInput addMessage={addMessage} /> */}
      <Input setTitle={setTitle} title={title} />
      <Button name={"+"} callBack={callBackButtonHandler} />
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
}

export default App;
