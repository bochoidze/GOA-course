import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  // ობიექტების ახალი მასივი
  const users = [
    { id: 1, name: "ლომი დავითი", age: 21 },
    { id: 2, name: "მხეცი ჯანეზა", age: 22 },
    { id: 3, name: "ვინცხა", age: 20 },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>ჩვენი ჯგუფის წევრები</h2>
      <ul>
        {users.map((person) => (
          <li key={person.id}>
            {person.name} - ასაკი: {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App