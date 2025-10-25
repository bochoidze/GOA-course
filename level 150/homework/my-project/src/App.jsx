// App.jsx
import { useState } from 'react';

// Components
function Header({ title }) { return <h1>{title}</h1>; }
function Product({ price, inStock }) { return <div><h3>{price} ₾</h3><p>{inStock ? "✅" : "❌"}</p></div>; }
function TodoList({ todos }) { return <ul>{todos.map((t,i)=><li key={i}>{t}</li>)}</ul>; }
function Button({ onClick, children }) { return <button onClick={onClick}>{children}</button>; }
function Card({ children }) { return <div style={{border:'1px solid #ccc', padding:10, margin:10}}>{children}</div>; }
function Navbar({ navigate }) { return <nav style={{display:'flex', gap:10}}>{['samsung','apple','xiaomi','huawei','personal'].map(p=><button key={p} onClick={()=>navigate(p)}>{p}</button>)}</nav>; }

// Pages
const Samsung = () => <div><Header title="Samsung"/><Product price={1200} inStock={true}/></div>;
const Apple = () => <div><Header title="Apple"/><Product price={1500} inStock={true}/></div>;
const Xiaomi = () => <div><Header title="Xiaomi"/><Product price={700} inStock={false}/></div>;
const Huawei = () => <div><Header title="Huawei"/><Product price={800} inStock={true}/></div>;
const Personal = () => (
  <div>
    <Header title="Personal"/>
    <TodoList todos={['დავალება 1','დავალება 2']}/>
    <Button onClick={()=>alert("Hello!")}>Click me</Button>
    <Card><h2>სათაური</h2><p>აღწერა ბარათისთვის</p></Card>
  </div>
);

// App
export default function App() {
  const [page, setPage] = useState('samsung');
  const pages = { samsung: Samsung, apple: Apple, xiaomi: Xiaomi, huawei: Huawei, personal: Personal };
  const Page = pages[page];
  return <div><Navbar navigate={setPage}/><Page/></div>;
}
