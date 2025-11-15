// App.jsx

import React from "react";
import "./App.css"; // აქ უკავშირდება სტილებს

function App() {
  const age = 16;
  const isLoggedIn = true;
  const showWarning = false;

  // IF STATEMENT:
  // ამოწმებს პირობას → true/false
  let ageMessage = "";
  if (age >= 18) {
    ageMessage = "შენ სრულწლოვანი ხარ";
  } else {
    ageMessage = "შენ არასრულწლოვანი ხარ";
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Logic Examples</h1>

      {/* IF STATEMENT RESULT */}
      <h2>{ageMessage}</h2>

      {/* TERNARY OPERATOR:
          მოკლე if/else — პირობა ? მართალია : ტყუილია */}
      <h3>{isLoggedIn ? "ავტორიზებული ხარ" : "შენ არ ხარ ავტორიზებული"}</h3>

      {/* && OPERATOR:
          რაღაც გამოჩნდება მხოლოდ მაშინ, როცა პირობა trueა */}
      {showWarning && <p style={{ color: "red" }}>გაფრთხილება ჩართულია</p>}
    </div>
  );
}

export default App;
