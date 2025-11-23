import { useState } from "react";
import "./App.css"

export default function App() {
  // კალკულატორის ეკრანზე გამოსატანი რიცხვი
  const [display, setDisplay] = useState("0");

  // ღილაკის დაჭერა
  const handleClick = (value) => {
    if (display === "0" && value !== "=" && value !== "C") {
      setDisplay(value);
      return;
    }

    if (value === "C") {
      setDisplay("0");
      return;
    }

    if (value === "=") {
      try {
        // ვთვლით გამოსახულებას (eval მარტივ მაგალითში OKა)
        const result = eval(display);
        setDisplay(String(result));
      } catch {
        setDisplay("Error");
      }
      return;
    }

    setDisplay(display + value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-72">
        <div className="bg-black text-white text-right p-4 rounded-xl text-2xl mb-4 font-mono">
          {display}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {[
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+",
          ].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-gray-200 hover:bg-gray-300 py-3 rounded-xl text-xl"
            >
              {btn}
            </button>
          ))}

          <button
            onClick={() => handleClick("C")}
            className="col-span-4 bg-red-400 hover:bg-red-500 text-white py-3 rounded-xl text-xl mt-2"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
