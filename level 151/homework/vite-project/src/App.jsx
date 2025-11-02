import React, { useState, useRef, useEffect } from "react";
import "./App.css";

/*
  Single-file UI with 5 demos (no react-router-dom).
  Navigation switches views via local state.
*/

function Navbar({ active, setActive }) {
  const items = [
    { id: "netflix", label: "Netflix" },
    { id: "weather", label: "Weather" },
    { id: "portfolio", label: "Portfolio" },
    { id: "shop", label: "E-Shop" },
    { id: "music", label: "Music" },
  ];
  return (
    <header className="nav">
      <div className="nav-left">
        <div className="logo">React<span className="logo-accent">Mini</span></div>
        <div className="logo-sub">5 Demos</div>
      </div>
      <nav className="nav-links">
        {items.map((it) => (
          <button
            key={it.id}
            className={"nav-btn " + (active === it.id ? "nav-btn-active" : "")}
            onClick={() => setActive(it.id)}
          >
            {it.label}
          </button>
        ))}
      </nav>
      <div className="nav-right">YourName • Demo</div>
    </header>
  );
}

/* 1) Netflix (cards) */
function Netflix({ className = "" }) {
  const movies = [
    { id: 1, title: "The Great Adventure", year: 2021, img: "https://via.placeholder.com/600x360?text=Movie+1" },
    { id: 2, title: "Love in Tbilisi", year: 2019, img: "https://via.placeholder.com/600x360?text=Movie+2" },
    { id: 3, title: "Space Odyssey", year: 2023, img: "https://via.placeholder.com/600x360?text=Movie+3" },
    { id: 4, title: "Mystery Night", year: 2020, img: "https://via.placeholder.com/600x360?text=Movie+4" },
  ];
  return (
    <section className={`page ${className}`}>
      <h1 className="hero-title">🎬 Netflix Clone</h1>
      <p className="hero-sub">Browse featured movies — simple cards layout</p>

      <div className="grid">
        {movies.map((m) => (
          <article key={m.id} className="card">
            <div className="card-img" style={{ backgroundImage: `url(${m.img})` }} />
            <div className="card-body">
              <h3>{m.title}</h3>
              <p className="muted">{m.year} • Action</p>
              <div className="card-actions">
                <button className="btn primary">Play</button>
                <button className="btn">My List</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* 2) Weather (mock fetch) */
function Weather({ className = "" }) {
  const [city, setCity] = useState("Tbilisi");
  const [data, setData] = useState(null);
  const getWeather = async () => {
    // mocked for offline demo: generate simple fake data
    setData({ temp: 15 + Math.floor(Math.random() * 12), desc: "Partly cloudy" });
  };
  useEffect(() => {
    getWeather();
    // eslint-disable-next-line
  }, []);
  return (
    <section className={`page ${className}`}>
      <h1 className="hero-title">☀️ Weather App</h1>
      <p className="hero-sub">Enter a city and get the temperature (demo)</p>

      <div className="control-row">
        <input className="input" value={city} onChange={(e) => setCity(e.target.value)} />
        <button className="btn primary" onClick={getWeather}>Get</button>
      </div>

      {data && (
        <div className="weather-card">
          <div className="weather-left">
            <div className="temp">{data.temp}°C</div>
            <div className="desc">{data.desc}</div>
          </div>
          <div className="weather-right">
            <div className="city">{city}</div>
            <div className="muted">Demo data</div>
          </div>
        </div>
      )}
    </section>
  );
}

/* 3) Portfolio */
function Portfolio({ className = "" }) {
  const projects = [
    { id: 1, title: "Project A", desc: "Web app demo" },
    { id: 2, title: "Project B", desc: "E-commerce demo" },
    { id: 3, title: "Project C", desc: "Music player demo" },
  ];
  return (
    <section className={`page ${className}`}>
      <h1 className="hero-title">👨‍💻 Portfolio</h1>
      <p className="hero-sub">Short bio and project showcase</p>

      <div className="bio-card">
        <div>
          <h2>Hi — I'm a React developer</h2>
          <p className="muted">I build small demos and interactive UI.</p>
        </div>
        <div className="bio-actions">
          <button className="btn primary">Download CV</button>
          <button className="btn">Contact</button>
        </div>
      </div>

      <h3 style={{ marginTop: 24 }}>Projects</h3>
      <div className="list">
        {projects.map((p) => (
          <div key={p.id} className="list-item">
            <div>
              <strong>{p.title}</strong>
              <div className="muted">{p.desc}</div>
            </div>
            <div>
              <button className="btn">View</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 4) E-Shop */
function EShop({ className = "" }) {
  const products = [
    { id: 1, name: "Football Boots", price: 79.99, img: "https://via.placeholder.com/400x260?text=Boots" },
    { id: 2, name: "Shin Guards", price: 19.99, img: "https://via.placeholder.com/400x260?text=Guards" },
    { id: 3, name: "Training Jersey", price: 49.99, img: "https://via.placeholder.com/400x260?text=Jersey" },
  ];
  const [cart, setCart] = useState([]);
  function add(p) {
    setCart((c) => {
      const found = c.find((x) => x.id === p.id);
      if (found) return c.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      return [...c, { ...p, qty: 1 }];
    });
  }
  function remove(id) {
    setCart((c) => c.filter((x) => x.id !== id));
  }
  return (
    <section className={`page ${className}`}>
      <h1 className="hero-title">🛒 E-Shop Demo</h1>
      <p className="hero-sub">Simple shop with cart</p>

      <div className="grid">
        <div className="shop-products">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-img" style={{ backgroundImage: `url(${p.img})` }} />
              <div className="product-body">
                <div><strong>{p.name}</strong></div>
                <div className="muted">${p.price.toFixed(2)}</div>
                <div className="card-actions">
                  <button className="btn primary" onClick={() => add(p)}>Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="shop-cart">
          <h3>Cart ({cart.reduce((s, i) => s + i.qty, 0)})</h3>
          <div className="cart-list">
            {cart.length === 0 && <div className="muted">Cart is empty</div>}
            {cart.map((it) => (
              <div key={it.id} className="cart-item">
                <div>
                  <div>{it.name}</div>
                  <div className="muted">Qty: {it.qty}</div>
                </div>
                <div>
                  <div>${(it.price * it.qty).toFixed(2)}</div>
                  <button className="btn tiny" onClick={() => remove(it.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          {cart.length > 0 && <div className="cart-total">Total: ${cart.reduce((s, i) => s + i.qty * i.price, 0).toFixed(2)}</div>}
        </aside>
      </div>
    </section>
  );
}

/* 5) Music Player */
function Music({ className = "" }) {
  const tracks = [
    { id: 1, title: "Track One", src: "/track1.mp3" },
    { id: 2, title: "Track Two", src: "/track2.mp3" },
  ];
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.play().catch(() => {});
    else audioRef.current.pause();
  }, [playing, index]);

  function next() { setIndex((i) => (i + 1) % tracks.length); setPlaying(true); }
  function prev() { setIndex((i) => (i - 1 + tracks.length) % tracks.length); setPlaying(true); }

  return (
    <section className={`page ${className}`}>
      <h1 className="hero-title">🎧 Music Player</h1>
      <p className="hero-sub">Play / Pause / Prev / Next (place audio files in public/)</p>

      <div className="music-card">
        <div className="music-info">
          <div className="music-title">{tracks[index].title}</div>
          <div className="muted">Track {index + 1} of {tracks.length}</div>
        </div>
        <div className="music-controls">
          <button className="btn" onClick={prev}>◀ Prev</button>
          <button className="btn primary" onClick={() => setPlaying(p => !p)}>{playing ? "Pause" : "Play"}</button>
          <button className="btn" onClick={next}>Next ▶</button>
        </div>
        <audio ref={audioRef} src={tracks[index].src} onEnded={next} />
      </div>
    </section>
  );
}

/* Root App */
export default function App() {
  const [active, setActive] = useState("netflix");

  return (
    <div className="app">
      <Navbar active={active} setActive={setActive} />

      <main className="container">
        {active === "netflix" && <Netflix />}
        {active === "weather" && <Weather />}
        {active === "portfolio" && <Portfolio />}
        {active === "shop" && <EShop />}
        {active === "music" && <Music />}
      </main>

      <footer className="footer">
        <div>Made with ❤️ — React + Vite</div>
        <div className="muted">No external router — single file demo</div>
      </footer>
    </div>
  );
}
