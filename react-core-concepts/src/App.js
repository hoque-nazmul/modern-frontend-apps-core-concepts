import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Main.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$89.99'},
    {name: 'Illustrator', price: '$69.89'},
    {name: 'After Effect', price: '$189.99'},
    {name: 'Premier Pro', price: '$49.99'}
  ];
  const persons = [
    {name: "Nazmul Hoque", job: "Software Engineer", institution: "Chittagong University"},
    {name: "Mukata Hoque", job: "HouseWife", institution: "City University"},
    {name: "Jhankar", job: "Web Developer", institution: "America University"},
    {name: "Anayet Ullah", job: "Teacher", institution: "Chittagong University"},
  ]
  var friends = ['Anayet', 'Towhid', 'Karim']
  
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
        <ul>
        {
          products.map(product => <li>{product.name}</li>)
        }
        <hr/>
        {
          friends.map(frnds => <li> {frnds} </li>)
        }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {
          persons.map(person => <Person personsData={person}></Person>)
        }
      
      </header>
    </div>
  );
}

function Counter () {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{ backgroundColor: 'cyan', fontWeight: 'bold', borderRadius: '5px', border: '2px solid salmon', margin: '10px', color: 'black', padding: '6px 15px' }}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ backgroundColor: 'cyan', fontWeight: 'bold', borderRadius: '5px', border: '2px solid salmon', margin: '10px', color: 'black', padding: '6px 15px' }}>Dicrease</button>
    </div>
  )
}

function Product(profs) {
var productWrapper = {
  width: '20%',
  height: '200px',
  borderRadius: '10px',
  border: '2px solid salmon',
  padding: '30px 30px',
  margin: '10px',
  float: 'left'
}
var buyBtn = {
  padding: '8px 20px',
  backgroundColor: 'cyan',
  textDecoration: 'none',
  fontSize: '16px'
}
const {name, price} = profs.product;

  return (
    <div style={productWrapper}>
      <h4>Name: {name}</h4>
     <h5>Price: {price}</h5>
      <a href="#" style={buyBtn}>Buy Now</a>
    </div>
  )
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
  var {name, job, institution} = profs.personsData;
  return (
    <div className="personDetails">
      <h2>Name: <span style={{ color: 'cyan' }}>{name}</span></h2>
      <h5>Job: {job}</h5>
      <h6>Institution: {institution}</h6>
      <a href="#" style={btnDetails}>Details</a>
    </div>

  )
}
export default App;