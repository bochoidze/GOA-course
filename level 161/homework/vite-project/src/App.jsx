import React from "react";
import Child from "./Child";
import Greeting from "./Greeting";
import Message from "./Message";
import Age from "./Age";
import Status from "./Status";

function App() {
  const numberProp = 25;
  const textProp = "Hello World";
  const arrayProp = [1, 2, 3];
  const objectProp = { city: "Tbilisi", age: 18 };
  const funcProp = () => alert("Function worked!");
  const boolProp = true;
  const nameProp = "Luka";
  const priceProp = 19.99;
  const userProp = { name: "Ana", online: false };
  const colorsProp = ["red", "blue", "green"];

  return (
    <div>
      {/* Basic props examples */}
      <Greeting name="Davit" />
      <Greeting name="Nino" />
      <Greeting name="Luka" />

      <Message text="This is a message" />
      <Age number={17} />
      <Status isOnline={true} />

      {/* Parent to Child */}
      <Child
        numberProp={numberProp}
        textProp={textProp}
        arrayProp={arrayProp}
        objectProp={objectProp}
        funcProp={funcProp}
        boolProp={boolProp}
        nameProp={nameProp}
        priceProp={priceProp}
        userProp={userProp}
        colorsProp={colorsProp}
      />
    </div>
  );
}

export default App;
