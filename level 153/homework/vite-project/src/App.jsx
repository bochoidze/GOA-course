import React from "react";
import ExtraComponent from "./ExtraComponent";

function App() {
  // === Why React? ===
  const whyReact = (
    <div>
      <h2>Why React?</h2>
      <ul>
        <li>Reuses components easily</li>
        <li>Fast updates with Virtual DOM</li>
        <li>Easy to manage state</li>
        <li>Works well with modern JS tools</li>
        <li>Great community support</li>
      </ul>
    </div>
  );

  // === Hello World ===
  const helloWorldExamples = (
    <div>
      <h2>Hello World Examples</h2>
      <p>{'Hello, React!'}</p>
      <h3>{'Welcome to JSX'}</h3>
      <div>{`Current Year: ${new Date().getFullYear()}`}</div>
      <p>{['H', 'e', 'l', 'l', 'o'].join('')}</p>
      <button onClick={() => alert("Hello!")}>Say Hello</button>
    </div>
  );

  // === What is JSX ===
  const whatIsJSX = (
    <div>
      <h2>What is JSX?</h2>
      <p>JSX looks like HTML but is actually JavaScript syntax.</p>
      <p>{2 + 3} is rendered inside JSX.</p>
      <p>{'You can write logic directly inside {}'}</p>
      <p>{true ? "Condition true" : "Condition false"}</p>
      <p>{["JSX", "is", "awesome"].join(" ")}</p>
    </div>
  );

  // === JSX Elements ===
  const jsxElements = (
    <div>
      <h2>JSX Elements</h2>
      <h4>Heading element</h4>
      <p>Paragraph element</p>
      <input placeholder="Input element" />
      <button>Button element</button>
      <a href="#">Link element</a>
    </div>
  );

  // === Attributes in JSX ===
  const attributesExamples = (
    <div>
      <h2>Attributes in JSX</h2>
      <img src="https://via.placeholder.com/100" alt="Example" />
      <a href="https://react.dev" target="_blank" rel="noreferrer">React Docs</a>
      <input type="text" placeholder="Enter text..." />
      <button disabled>Disabled button</button>
      <div style={{ color: "blue", fontWeight: "bold" }}>Styled div</div>
    </div>
  );

  // === Nested JSX ===
  const nestedJSX = (
    <div>
      <h2>Nested JSX</h2>
      <div>
        <ul>
          <li>List 1</li>
          <li>List 2
            <ul>
              <li>Sub item 1</li>
              <li>Sub item 2</li>
            </ul>
          </li>
          <li>List 3</li>
        </ul>
      </div>
      <div>
        <p><strong>Nested paragraph with bold text</strong></p>
      </div>
    </div>
  );

  // === JSX Elements and Their Surroundings ===
  const surroundings = (
    <div>
      <h2>JSX Elements And Their Surroundings</h2>
      <p>Each JSX block must have a single root element.</p>
      <p>We can wrap multiple tags inside one &lt;div&gt;.</p>
      <div><p>Child paragraph</p></div>
      <footer>Footer is still inside root div</footer>
      <span>✅ Works fine</span>
    </div>
  );

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>React JSX Practice</h1>
      {whyReact}
      {helloWorldExamples}
      {whatIsJSX}
      {jsxElements}
      {surroundings}
      {attributesExamples}
      {nestedJSX}

      <ExtraComponent />
    </div>
  );
}

export default App;
