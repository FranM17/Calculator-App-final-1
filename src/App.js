import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Calculadora1 from "./pages/calc1/calc1_app";
import Calculadora2 from "./pages/calc2/calc2_app";
import Calculadora3 from "./pages/calc3/calc3_app";


function App() {
  const [activeCalculator, setActiveCalculator] = useState("calculadora1");
  // ----- const [showImages, setShowImages] = useState(true); -----
  
  return (
    <div className="App">
      <header className="App-header">
      <nav style={{ marginBottom: '30px' }}>
          <button
            onClick={() => setActiveCalculator("calculadora1")}
            style={{
              margin: '0 10px',
              padding: '10px 20px',
              backgroundColor: activeCalculator === "calculadora1" ? '#61dafb' : '#282c34',
              color: activeCalculator === "calculadora1" ? '#000' : '#fff',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Calculadora 1
          </button>
          <button
            onClick={() => setActiveCalculator("calculadora2")}
            style={{
              margin: '0 10px',
              padding: '10px 20px',
              backgroundColor: activeCalculator === "calculadora2" ? '#61dafb' : '#282c34',
              color: activeCalculator === "calculadora2" ? '#000' : '#fff',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Calculadora 2
          </button>
          <button
            onClick={() => setActiveCalculator("calculadora3")}
            style={{
              margin: '0 10px',
              padding: '10px 20px',
              backgroundColor: activeCalculator === "calculadora3" ? '#61dafb' : '#282c34',
              color: activeCalculator === "calculadora3" ? '#000' : '#fff',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Calculadora 3
          </button>
        </nav>
        
        <div style={{ marginTop: '50px' }}>
          {activeCalculator === "calculadora1" && <Calculadora1 />}
          {activeCalculator === "calculadora2" && <Calculadora2 />}
          {activeCalculator === "calculadora3" && <Calculadora3 />}
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
