import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var name = "Dr. A.k. boishakh";
  var person = {
    fname: 'Saruj',
    lName: 'Datta',
    title: 'Developer'
  }
  var style = {
    color : 'red',
    fontSize: 50,
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
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

        <h3 style={style}>Doctor name: {name} </h3>
  <h5>Title: {person.title} <br/> Name: {person.fname+" "+ person.lName}  </h5>

        <p style= {{ color : 'blue',}}>My First React Paragraph</p>
  <p>Calculate math: { 5 + 15 }</p>
      </header>

    </div>
  );
}

export default App;
