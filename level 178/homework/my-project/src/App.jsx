import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [text, setText] = useState("");
  const [itemText, setItemText] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (itemText.trim() === "") return;
    setList([...list, itemText]);
    setItemText("");
  };

  return (
    <div className="app">
      <h1 className="title">React useState Projects</h1>

      {/* Counter */}
      <div className="card">
        <h2>Counter</h2>
        <p className="count">{count}</p>
        <div className="btn-group">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>

      {/* Toggle */}
      <div className="card">
        <h2>Toggle Button</h2>
        <p className={isOn ? "on" : "off"}>
          {isOn ? "ON" : "OFF"}
        </p>
        <button onClick={() => setIsOn(!isOn)}>Toggle</button>
      </div>

      {/* Live Text Mirror */}
      <div className="card">
        <h2>Live Text Mirror</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="დაწერე ტექსტი"
        />
        <h1 className="mirror">{text}</h1>
      </div>

      {/* List Adder */}
      <div className="card">
        <h2>Simple List Adder</h2>
        <input
          type="text"
          value={itemText}
          onChange={(e) => setItemText(e.target.value)}
          placeholder="დაამატე ელემენტი"
        />
        <button onClick={addItem}>Add</button>

        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
