import React, { useState } from "react";
import "./App.css";
import { NewComponent } from "./components/NewComponent";
import { Button } from "./components/Button";

function App() {
  // const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log("Hell 3");
  // };
  // const myFirstSubscriber2 = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log("Hell 5");
  // };

  // const onClickHundler = (name: string): void => {
  //   console.log(name);
  // };

  // const foo1 = () => {
  //   console.log(100200);
  // };

  // const foo2 = (number: number) => {
  //   console.log(number);
  // };

  const Button1Foo = (subscriber: string, age: number, address: string) => {
    console.log(subscriber, age, address);
  };

  const Button2Foo = (subscriber: string) => {
    console.log(subscriber);
  };

  const Button3Foo = () => {
    console.log("Im stupid button");
  };

  return (
    <>
      {/* <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          onClickHundler("Dima")
        }
      >
        MyYouTube Chanel 1
      </button>
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          onClickHundler("Dimon")
        }
      >
        MyYouTube Chanel 2
      </button> */}

      {/* <button onClick={foo1}>1</button>
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => foo2(100200)}
      >
        2
      </button> */}
      <Button
        title={"MyYouTubeChanel 1"}
        callBack={() => Button1Foo("im Dima", 21, "Lodz")}
      />
      <Button
        title={"MyYouTubeChanel 2"}
        callBack={() => Button2Foo("im Dimas")}
      />
      <Button
        title={"Stupid"}
        callBack={() => {
          Button3Foo();
        }}
      />
    </>
  );
}

export default App;
