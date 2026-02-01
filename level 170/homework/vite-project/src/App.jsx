import React from "react";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My Responsive Site</h1>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="content">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </main>

      <footer className="footer">
        © 2026 Luka
      </footer>
    </div>
  );
}

export default App;
