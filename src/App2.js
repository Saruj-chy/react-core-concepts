import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const allNayok = ['Samanshah', 'Sakib', 'Salman', 'Amir', 'Shahrukh'];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person. </p>
        <Person />
        <Hero name="Robel" profession='Actor' />
        <Hero2 name="Samanshah" profession='Legend of Acting' />
        <AllNayok name={allNayok} />
      </header>

    </div>
  );
}
function Person() {
  const nameStyle = {
    padding: '10px',
    color: 'green',
  }
  return (
    <div style={{ border: '2px solid red', padding: '10px' }}>
      <h1 style={nameStyle}> Name: Sakib Al Hassan </h1>
      <h2>Cricketter</h2>
    </div>
  )
}


//==============   here Hero
function Hero(props) {
  const nameStyle = {
    padding: '10px',
    color: 'green',
  }
  return (
    <div style={{ border: '2px solid red', margin: '10px' }}>
      <h1 style={nameStyle}> Name: {props.name} </h1>
      <h2>Profession: {props.profession} BD</h2>
    </div>
  )
}

//==============   here Hero2

function Hero2({ name, profession }) {
  const nameStyle = {
    padding: '10px',
    color: 'green',
  }
  return (
    <div style={{ border: '2px solid red', margin: '10px' }}>
      <h1 style={nameStyle}> Name: {name} </h1>
      <h2>Profession: {profession} </h2>
    </div>
  )
}

//==============   here AllNayok

function AllNayok(props) {
  const nameStyle = {
    padding: '10px',
    color: 'green',
  }
  return (
    <div style={{ border: '2px solid red', margin: '10px' }}>
      <h1 style={nameStyle}> Name: {props.name[0]} </h1>
      <h1 style={nameStyle}> Name: {props.name[1]} </h1>
      <h1 style={nameStyle}> Name: {props.name[2]} </h1>
      <h1 style={nameStyle}> Name: {props.name[3]} </h1>
      <h1 style={nameStyle}> Name: {props.name[4]} </h1>

    </div>
  )
}

export default App;
