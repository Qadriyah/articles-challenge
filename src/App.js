import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
