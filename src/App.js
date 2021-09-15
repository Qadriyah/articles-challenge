import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar data-test="nav-bar" />
      <div className="container" data-test="content-area">
        <Home />
      </div>
    </div>
  );
}

export default App;
