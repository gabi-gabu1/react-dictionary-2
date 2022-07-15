import "./App.css";
import booklogo from "./booklogo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={booklogo} alt="logo" />
        <h3>Dictionary</h3>
      </header>
      <Dictionary keyWord="moon" />
    </div>
  );
}

export default App;
