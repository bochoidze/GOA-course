import React from "react";
import k2 from "./assets/image/img.png";

export default function ProfileCard() {
  return (
    
    <div style={{ textAlign: "center" }}>
      <br />
      <img src={k2} alt="" />
      <h1>Jessica Randall</h1>
      <p className="p1">London, United Kingdom</p>
      <p className="p2">"Front-end developer and avid reader."</p>

      <button>GitHub</button>
      <br />
      <br />

      <button>Frontend Mentor</button>
      <br />
      <br />

      <button>LinkedIn</button>
      <br />
      <br />

      <button>Twitter</button>
      <br />
      <br />

      <button>Instagram</button>
    </div>
  );
}