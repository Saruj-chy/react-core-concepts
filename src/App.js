import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$69.99' },
    { name: 'PDF Reader', price: '$50.99' },

  ]

  return (
    <div className="App">
      <header className="App-header">

        <Product name={products[0].name} price={products[0].price} />

        <Product2 product={products[0]} />
        <Product2 product={products[1]} />
        <Product2 product={products[2]} />


        <Product3 product={products[0]} />

      </header>

    </div>
  );
}

//============================    
function Product(props) {
  const productStyle = {

    padding: '10px',
    backgroundColor: 'lightgray',
    border: '1px solid gray',
    borderRadius: '5px',
    height: '200px',
    weight: '200px',
    float: 'left',


  }
  return (
    <div style={productStyle}>
      <h2>Name: {props.name} </h2>
      <h3>Price: {props.price}</h3>
      <button>Buy Now</button>

    </div>
  )
}

//==================================================  array hishebe patale
function Product2(props) {
  const productStyle = {

    padding: '10px',
    backgroundColor: 'lightgray',
    border: '1px solid gray',
    borderRadius: '5px',
    height: '200px',
    weight: '200px',
    float: 'left',


  }
  console.log(props.product.name);
  return (
    <div style={productStyle}>
      <h2>Name: {props.product.name} </h2>
      <h3>Price: {props.product.price}</h3>
      <button>Buy Now</button>

    </div>
  )
}

//==================================================  array hishebe patale
function Product3(props) {
  const productStyle = {

    padding: '10px',
    backgroundColor: 'lightgray',
    border: '1px solid gray',
    borderRadius: '5px',
    height: '200px',
    weight: '200px',
    float: 'left',


  }
  const { name, price } = props.product; //===========   component set kore
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h2>Name: {name} </h2>
      <h3>Price: {price}</h3>
      <button>Buy Now</button>

    </div>
  )
}


export default App;
