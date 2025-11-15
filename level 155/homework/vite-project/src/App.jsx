// React + Vite Setup
// 1) npm create vite@latest my-app -- --template react
// 2) cd my-app
// 3) npm install
// 4) npm run dev

export default function App() {
  // ცვლადები JSX-ში
  const title = "Hello title";
  const text = "Sample text";
  const num = 10;
  const img = "https://via.placeholder.com/100";

  return (
    <div>
      {/* CLASS vs className */}
      {/* HTML-ში class გამოიყენება, მაგრამ React-ში className, რადგან class არის JS keyword */}

      {/* მაგალითი 1 */}
      <h1 className="header">Title</h1>

      {/* მაგალითი 2 */}
      <p className="paragraph">Paragraph text</p>

      {/* მაგალითი 3 */}
      <div className="box">Box element</div>

      {/* SELF-CLOSING TAGS */}
      {/* Tag რომელსაც შიგნით content არ აქვს იწერება <tag /> */}

      <img src={img} />
      <br />
      <hr />
      <input />
      <meta />
      <link />
      <source />
      <area />
      <col />
      <base />

      {/* CURLY BRACES */}
      {/* {} გამოიყენება JavaScript-ის ჩასასმელად JSX-ში */}

      <p>{title}</p>
      <p>{text}</p>
      <p>{num}</p>
      <p>{num + 5}</p>
      <p>{title.toUpperCase()}</p>
      <p>{"Simple string"}</p>
      <p>{text.length}</p>
      <p>{num * 2}</p>
      <p>{true ? "Yes" : "No"}</p>
      <p>{`Template: ${title}`}</p>

      {/* VARIABLE IN JSX */}
      {/* ცვლადი იწერება {variable} */}

      <h2>{title}</h2>
      <p>{text}</p>
      <span>{num}</span>
      <button>{text}</button>
      <h3>{`Number: ${num}`}</h3>
      <p>{title + " added"}</p>
      <p>{num - 3}</p>
      <p>{text.toLowerCase()}</p>
      <div>{title.length}</div>
      <strong>{num * num}</strong>
    </div>
  );
}
