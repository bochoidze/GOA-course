import "./App.css";
import avatar from "./avatar-jessica.jpeg";

function App() {
  return (
    <div className="page">
      <div className="card">
        <img src={avatar} alt="Jessica Randall" />

        <h1>Jessica Randall</h1>
        <p className="p1">London, United Kingdom</p>
        <p className="p2">"Front-end developer and avid reader."</p>

        <button>GitHub</button>
        <button>Frontend Mentor</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </div>
  );
}

export default App;
