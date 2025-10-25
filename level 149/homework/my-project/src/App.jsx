function Header({ title }) {
  return <h1>{title}</h1>;
}

function Product({ price, inStock }) {
  return (
    <div>
      <h2>ფასი: {price} ₾</h2>
      <p>{inStock ? "ხელმისაწვდომია ✅" : "არ არის ❌"}</p>
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, i) => <li key={i}>{todo}</li>)}
    </ul>
  );
}

function Button({ onClick }) {
  return <button onClick={onClick}>დამაჭირე!</button>;
}

function Card({ children }) {
  return (
    <div style={{border:'1px solid #ccc', padding:10, borderRadius:10, margin:10}}>
      {children}
    </div>
  );
}

function App() {
  const handleClick = () => alert("ღილაკი დაიჭირა!");

  return (
    <div>
      <Header title="მოგესალმები ჩემს აპში!" />
      <Product price={49.99} inStock={true} />
      <TodoList todos={['დავალება 1', 'დავალება 2']} />
      <Button onClick={handleClick} />
      <Card>
        <h2>სათაური</h2>
        <p>აღწერა ბარათისთვის</p>
      </Card>
    </div>
  );
}

export default App;
