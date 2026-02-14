import React, { useState } from "react";

function CounterWithCallback() {
  const [count, setCount] = useState(0);

  
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);

  };

  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
    
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>ქაუნტერი: {count}</h1>
      <button onClick={handleIncrease}>დამატება</button>
      <button onClick={handleDecrease}>წაშლა</button>
    </div>
  );
}

export default CounterWithCallback;
