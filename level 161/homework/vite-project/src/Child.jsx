import React from "react";

function Child(props) {
  // Destructuring
  const {
    numberProp,
    textProp,
    arrayProp,
    objectProp,
    funcProp,
    boolProp,
    nameProp,
    priceProp,
    userProp,
    colorsProp,
  } = props;

  return (
    <div>
      {/* dot notation */}
      <h2>Text: {props.textProp}</h2>

      {/* destructuring */}
      <h3>Number: {numberProp}</h3>

      <p>Array: {arrayProp.join(", ")}</p>

      <p>Object: city = {objectProp.city}, age = {objectProp.age}</p>

      <button onClick={funcProp}>Click function</button>

      <p>Boolean: {boolProp ? "TRUE" : "FALSE"}</p>

      <p>Name: {nameProp}</p>

      <p>Price: {priceProp}</p>

      <p>User: {userProp.name} - {userProp.online ? "Online" : "Offline"}</p>

      <p>Colors: {colorsProp.join(" | ")}</p>
    </div>
  );
}

export default Child;
