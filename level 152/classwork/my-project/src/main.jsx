import React from "react";
import ReactDOM from "react-dom/client";

// Fruits array
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

function App() {
  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
