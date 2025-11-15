import React from "react";
// თუ გსურთ local სურათი: import myImage from "../public/my-image.jpg";

export default function App() {
  // თუ არ იყენებთ import-ს, შეგიძლიათ პირდაპირ URL:
  const imageUrl = "https://via.placeholder.com/400x200.png?text=Example+Image";

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      {/* h1, h2, paragraph */}
      <h1>ეს არის H1 სათაური</h1>
      <h2>ეს არის H2 ქვესათაური</h2>
      <p>
        ეს პატარა აბზაცი არის მაგალითი ტექსტის. აქ შეგიძლიათ გამოგისუფლოთ ნებისმიერი
        ინფორმაციის აღწერა.
      </p>

      {/* სურათი */}
      <img
        src={imageUrl}
        alt="Example"
        style={{ width: "400px", height: "auto", display: "block", marginBottom: 20 }}
      />

      {/* 3 ღილაკი, თავისივე ტექსტით */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button onClick={() => alert("თქვენ დააჭირეთ ღილაკს 1")}>ღილაკი 1</button>
        <button onClick={() => alert("თქვენ დააჭირეთ ღილაკს 2")}>ღილაკი 2</button>
        <button onClick={() => alert("თქვენ დააჭირეთ ღილაკს 3")}>ღილაკი 3</button>
      </div>

      {/* კავშირი */}
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        გადადით Example.com-ზე
      </a>
    </div>
  );
}
