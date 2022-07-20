import "./App.css";
import booklogo from "./booklogo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={booklogo} alt="logo" />
        <div className="waviy">
          <span object="--i:1">D</span>
          <span object="--i:2">i</span>
          <span object="--i:3">c</span>
          <span object="--i:4">t</span>
          <span object="--i:5">i</span>
          <span object="--i:6">o</span>
          <span object="--i:7">n</span>
          <span object="--i:8">a</span>
          <span object="--i:8">r</span>
          <span object="--i:8">y</span>
        </div>
      </header>
      <Dictionary keyWord="moon" />
    </div>
  );
}

export default App;
