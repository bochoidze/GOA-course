import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {/* მენიუ */}
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <button onClick={() => setPage("seahorse")}>ზღვის ცხენები</button>
        <button onClick={() => setPage("bear")}>ზღვის დათვები</button>
        <button onClick={() => setPage("guinea")}>ზღვის გოჭები</button>
        <button onClick={() => setPage("nugzar")}>ნუგზარ ჩუბინიძე </button>
        <button onClick={() => setPage("spongebob")}>სპანჯბობი </button>
      </nav>

      {/* კონტენტი */}
      <div style={{ padding: "20px", border: "1px solid black" }}>
        {page === "home" && <h2>მოგესალმებით ჩემს საიტზე </h2>}
        {page === "seahorse" && (
          <div>
            <h2>ზღვის ცხენები </h2>
            <p>ესენი არიან ზღვის ულამაზესი არსებები.</p>
          </div>
        )}
        {page === "bear" && (
          <div>
            <h2>ზღვის დათვები </h2>
            <p>თუ არ არსებობენ – წარმოვიდგინოთ, რომ არსებობენ .</p>
          </div>
        )}
        {page === "guinea" && (
          <div>
            <h2>ზღვის გოჭები </h2>
            <p>საყვარელი და ხალისიანი ცხოველები.</p>
          </div>
        )}
        {page === "nugzar" && (
          <div>
            <h2>ნუგზარ ჩუბინიძე </h2>
            <p>ყველაზე მაგარი! </p>
          </div>
        )}
        {page === "spongebob" && (
          <div>
            <h2>სპანჯბობი </h2>
            <p>ვინ არ უყვარს სპანჯბობი? </p>
          </div>
        )}
      </div>
    </div>
  );
}
