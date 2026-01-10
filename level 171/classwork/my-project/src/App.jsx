import React from "react";

function App() {
  return (
    <div className="h-screen flex flex-col gap-6 items-center justify-center">

   
      <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
        Hover me
      </button>

  
      <input
        type="text"
        placeholder="Focus me"
        className="border p-2 focus:outline-none focus:border-green-500"
      />

      <button className="bg-red-500 active:bg-red-800 text-white px-4 py-2 rounded">
        Press me
      </button>

    
      <div className="has-[input:focus]:bg-yellow-200 p-4 border rounded">
        <input
          type="text"
          placeholder="Focus inside"
          className="border p-2"
        />
      </div>

    </div>
  );
}

export default App;
