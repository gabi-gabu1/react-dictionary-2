import "./App.css";
import booklogo from "./booklogo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={booklogo} alt="logo" />
      </header>
      <Dictionary />
    </div>
  );
}

export default App;
