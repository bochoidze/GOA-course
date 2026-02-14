import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <section className="hero">
        
        {/* სურათი */}
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="Laptop"
          />
        </div>

        {/* ტექსტი */}
        <div className="hero-content">
          <h1>Modern Responsive Design</h1>
          <p>
            ეს არის სხვა ტიპის რესპონსიული ლეიაუტი.
            დიდ ეკრანზე გვერდიგვერდ, პატარა ეკრანზე — სვეტებად.
          </p>

          <button>Get Started</button>
        </div>

      </section>
    </div>
  );
}

export default App;
