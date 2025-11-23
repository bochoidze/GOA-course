import React from "react";

export default function App() {
  // ------------------------------
  // 5 მაგალითი - Map
  // ------------------------------

  const user = new Map();
  user.set("name", "Luka");

  const player = new Map();
  player.set("sport", "Basketball");

  const car = new Map();
  car.set("brand", "BMW");

  const product = new Map();
  product.set("price", 50);

  const numbers = new Map();
  numbers.set("a", 1);
  numbers.set("b", 2);

  // ------------------------------
  // 5 მაგალითი - Key (Map key ტიპები)
  // ------------------------------

  const map1 = new Map();
  map1.set("name", "Luka"); // string key

  const map2 = new Map();
  map2.set(10, "ten"); // number key

  const obj = { id: 1 };
  const map3 = new Map();
  map3.set(obj, "Object"); // object key

  function fn() {}
  const map4 = new Map();
  map4.set(fn, "Function"); // function key

  const arr = [1, 2];
  const map5 = new Map();
  map5.set(arr, "Array"); // array key

  // ------------------------------
  // 5 მაგალითი - React.createElement
  // ------------------------------

  const el1 = React.createElement("h1", null, "Hello from React.createElement");

  const el2 = React.createElement(
    "p",
    { className: "text" },
    "This is a paragraph element"
  );

  const el3 = React.createElement(
    "div",
    { style: { border: "1px solid black", padding: "10px" } },
    React.createElement("h2", null, "Title"),
    React.createElement("p", null, "Description text")
  );

  const el4 = React.createElement(
    "button",
    { onClick: () => alert("Clicked!") },
    "Click me"
  );

  const el5 = React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Item 1"),
    React.createElement("li", null, "Item 2")
  );

  // ------------------------------
  // JSX output
  // ------------------------------
  return (
    <div style={{ padding: "20px" }}>
      <h1>All Examples Together</h1>

      {el1}
      {el2}
      {el3}
      {el4}
      {el5}

      <h2>Map Examples (console-ში ნახავ)</h2>
      <p>Check console for Map results.</p>

      {console.log("MAP 1:", user)}
      {console.log("MAP 2:", player)}
      {console.log("MAP 3:", car)}
      {console.log("MAP 4:", product)}
      {console.log("MAP 5:", numbers)}

      <h2>Key Examples (console-ში ნახავ)</h2>
      {console.log("KEY 1:", map1)}
      {console.log("KEY 2:", map2)}
      {console.log("KEY 3:", map3)}
      {console.log("KEY 4:", map4)}
      {console.log("KEY 5:", map5)}
    </div>
  );
}
