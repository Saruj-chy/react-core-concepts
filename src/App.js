import React, { useState, useEffect } from 'react';
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
        <Counter />
        <Users />

        {/* //==============    Product             */}
        {
          products.map(product => <Product name={product.name} price={product.price} />)
        }





      </header>

    </div>
  );
}
//==================     Counter
function Counter() {
  const [count, setCount] = useState(0);
  const handleCase = () => {
    // console.log("CLicked");
    const newCount = count + 1;
    setCount(newCount);

  }
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onMouseMove={handleCase}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

//============   Users
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setUsers(data);
      })
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      {
        console.log(users)
      }
      {
        users.map(user => <li>{user.name}</li>)
      }
      <ul style={{ color: 'red' }}>Email : </ul>
      {
        users.map(user => <li>{user.email}</li>)
      }
    </div>
  )
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

export default App;
