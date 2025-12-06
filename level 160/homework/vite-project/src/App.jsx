import "./App.css";

function App() {
  return (
    <div className="background">
      <div className="card">
        <img
          src="illustration-hero.svg"
          className="hero"
          alt="hero"
        />

        <h1>Order Summary</h1>
        <p className="desc">
          You can now listen to millions of songs, audiobooks, and podcasts
          on any device anywhere you like!
        </p>

        <div className="plan">
          <div className="plan-left">
            <img src="icon-music.svg" alt="music" />
            <div>
              <p className="plan-title">Annual Plan</p>
              <p className="plan-price">$59.99/year</p>
            </div>
          </div>
          <a href="#" className="change">Change</a>
        </div>

        <button className="primary">Proceed to Payment</button>
        <button className="secondary">Cancel Order</button>
      </div>
    </div>
  );
}

export default App;
