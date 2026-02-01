import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p>რიცხვი: {number}</p>
      <button onClick={() => setNumber(number + 1)}>
        გაზრდა
      </button>
    </div>
  );
}

export default App;
