import React, { useState } from "react";

export default function App() {
  const questions = [
    "What is React?",
    "What is useState?",
    "What is a component?",
    "What is props?"
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Click Counter</h2>
      <ClickCounter />

      <hr />

      <h2>Name List</h2>
      <NameList />

      <hr />

      <h2>Quiz Navigator Plus</h2>
      <QuizController questions={questions} />
    </div>
  );
}

/* ===========================
   1️⃣ ClickCounter
   =========================== */

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(prev => prev + 1)}>
        +1
      </button>

      <button
        onClick={() => {
          for (let i = 0; i < 5; i++) {
            setCount(prev => prev + 1);
          }
        }}
      >
        +5
      </button>
    </div>
  );
}

/* ===========================
   2️⃣ NameList
   =========================== */

function NameList() {
  const [names, setNames] = useState([]);

  const addJohn = () => {
    setNames(prev => [...prev, "John"]);
  };

  const removeName = (indexToRemove) => {
    setNames(prev =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <button onClick={addJohn}>Add John</button>

      <ul>
        {names.map((name, index) => (
          <li
            key={index}
            onClick={() => removeName(index)}
            style={{ cursor: "pointer" }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ===========================
   3️⃣ QuizController
   =========================== */

function QuizController({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <h3>
        Question {currentIndex + 1} of {questions.length}
      </h3>

      <p>{questions[currentIndex]}</p>

      <button
        onClick={() => setCurrentIndex(prev => prev - 1)}
        disabled={currentIndex === 0}
      >
        Previous
      </button>

      <button
        onClick={() => setCurrentIndex(prev => prev + 1)}
        disabled={currentIndex === questions.length - 1}
      >
        Next
      </button>
    </div>
  );
}
