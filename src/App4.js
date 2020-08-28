//============    EKhane map diye react e e simply kivabe data dekhanu hoi, ta dekhaiche

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Samanshah', 'Sakib', 'Salman', 'Amir', 'Shahrukh', 'Razzak'];

  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$69.99' },
    { name: 'PDF Reader', price: '$50.99' },

  ];
  const productNames = products.map(product => product.name)
  console.log(productNames);
  console.log(products.map(product => product));

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li style={{ color: 'yellow' }}>Nayok Names:</li>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          <br />
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <br />
          <li style={{ color: 'red' }}>Products Name: </li>
          {
            products.map(product => <li>{product.name + " " + product.price}</li>)
          }
          <br />


        </ul>
        {/* //==============    Product             */}
        {
          products.map(product => <Product name={product.name} price={product.price} />)
        }
        {/* ===================    Product2           */}

        {
          products.map(product => <Product2 product={product} />)
        }
        {/* ==================      Product3          */}
        {
          products.map(product => <Product3 product={product} />)
        }




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
    backgroundColor: 'yellow',
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
