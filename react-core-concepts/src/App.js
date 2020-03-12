import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Main.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Nazmul Hoque" job="Software Engineer" institution="Chittagong University"></Person>
        <Person name="Anayet Ullah" job="Teacher" institution="Chittagong University"></Person>
        <Person name="Murshed Fahim" job="Student" institution="Dhaka University"></Person>
        <Person name="Touhid Ahmed" job="Software Engineer" institution="FakaFaki University"></Person>
      </header>
    </div>
  );
}

function Person(profs) {
  var btnDetails = {
    color: 'white',
    backgroundColor: 'skyblue',
    padding: '8px 20px',
    textDecoration: 'none',
    fontSize: '16px',
    borderRadius: '10px'
  }
  return (
    <div className="personDetails">
      <h2>Name: <span style={{ color: 'cyan' }}>{profs.name}</span></h2>
      <h5>Job: {profs.job}</h5>
      <h6>Institution: {profs.institution}</h6>
      <a href="#" style={btnDetails}>Details</a>
    </div>

  );
}
export default App;
