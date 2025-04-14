import React, { useState } from "react";
import './App.css';
import Calculadora1 from "./pages/calc1/calc1_app";
import Calculadora2 from "./pages/calc2/calc2_app";
import Calculadora3 from "./pages/calc3/calc3_app";

function App() {
  const [activeCalculator, setActiveCalculator] = useState("calculadora1");

  // Estilos reutilizables
  const buttonStyle = (calculator) => ({
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: activeCalculator === calculator ? '#61dafb' : '#282c34',
    color: activeCalculator === calculator ? '#000' : '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: 'bold'
  });

  const renderCalculator = () => {
    switch(activeCalculator) {
      case "calculadora1":
        return <Calculadora1 />;
      case "calculadora2":
        return <Calculadora2 />;
      case "calculadora3":
        return <Calculadora3 />;
      default:
        return <Calculadora1 />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => setActiveCalculator("calculadora1")}
            style={buttonStyle("calculadora1")}
          >
            Calculadora Básica
          </button>
          <button
            onClick={() => setActiveCalculator("calculadora2")}
            style={buttonStyle("calculadora2")}
          >
            Calculadora Científica
          </button>
          <button
            onClick={() => setActiveCalculator("calculadora3")}
            style={buttonStyle("calculadora3")}
          >
            Calculadora Avanzada
          </button>
        </nav>
        
        <div style={{ 
          marginTop: '20px', 
          width: '100%', 
          maxWidth: '600px',
          padding: '20px',
          backgroundColor: 'rgba(40, 44, 52, 0.8)',
          borderRadius: '10px'
        }}>
          {renderCalculator()}
        </div>
      </header>
    </div>
  );
}

export default App;