import React from 'react';
import './App.css';
import TicTacToe from './TicTacToe';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn" style={{background: "#2196f3"}}>TicTacToe Challenge</button>
          </div>
        </div>
      </nav>
      <main>
        <div className="container" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <h1 className="title" style={{marginTop: "120px", color: "#2196f3", fontSize: "2.1rem"}}>TicTacToe Challenge</h1>
          <TicTacToe />
        </div>
      </main>
    </div>
  );
}

export default App;