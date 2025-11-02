import React from "react";

function App() {
  const name = "Luka";
  const person = { age: 14, city: "marbeuli" };
  const items = ["Football", "Music", "Games"];

  return (
    <div>
      <h2>{name}</h2>
      <p>{person.age} years old, from {person.city}</p>
      <ul>
        {items.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
      <p>მე ვარ <b>სიგმა</b> <i>ძმაო</i></p>
    </div>
  );
}

export default App;
