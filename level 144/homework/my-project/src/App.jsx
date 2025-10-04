import React from 'react';
import k2 from "./assets/image/image.png";

function Article({ text }) {
  return <h2>{text}</h2>; // დინამიური ტექსტის გამოხატვა
}

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello, World!</h1>
    <img src={k2} alt="" />
      <Article text="My First Website" />
    </div>
  );
}

export default App;