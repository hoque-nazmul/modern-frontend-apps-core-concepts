import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Main.css';

function App() {
  var clickBtn = {
    textDecoration: 'none',
    fontSize: '18px',
    padding: '10px 30px',
    borderRadius: '10px',
    backgroundColor: 'salmon',
    color: 'white'
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2><span className="highliter">Hello</span> <span className="test">world</span>, I am here!</h2>
        <p>I am <span style={{ color: 'cyan', fontWeight: 'bold' }}>Nazmul Hoque</span></p>
        <p>If you interest to know about me, please</p><a style ={clickBtn} href="#">Click Here</a>
      </header>
    </div>
  );
}

export default App;
