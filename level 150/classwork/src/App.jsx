function App() {
  const path = window.location.pathname;
  switch (path) {
    case "/" || "/home":
      return <Home />;
    case "/dashbaord":
      return <Dashbaord />;
    case "/contacts":
      return <Contacts />;
  }
  console.log(path);
  return <div></div>;
}

export default App;