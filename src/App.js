import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  // const nayoks = ['Razzak', 'Joshim', 'Iliyas', 'Salman', 'Shuvo', 'Shakib Khan'];
  // const products = [
  //   {name: 'Photoshop', price: '$99.99'},
  //   {name: 'Illustrator', price: '$60.99'},
  //   {name: 'Illustrator', price: '$60.99'}
  // ]
  // const nayokNames = nayoks.map(nayok => nayok);
  // console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
          <Counter></Counter>
          <Users></Users>

          {/* <ul>
            {
              nayoks.map(nayok => <li>{nayok}</li>)
            }
            {
              products.map(product => <li>{product.name}</li>)
            }
            {
              products.map(pd => <Product name={products[0].name}></Product>)
            }
            <li>{nayoks[0]}</li>
          </ul> */}
          <p>This is a text.</p>
          {/* <Product name={products[0].name}></Product>
          <Product name={products[1].name}></Product>
          <Person name="Shakib Khan" job="Player"></Person>
          <Person name="Rubel Hussain"></Person> */}
      </header>
    </div>
  );
}

// function Product(props){
//   const productsStyle = {
//     border: '1px solid green',
//     padding: '20px',
//     borderRadius: '10px',
//     height: '150px',
//     width: '200px',
//     textAlign: 'center',
//     marginBottom: '10px'
//   }
//   return (
//     <div style={productsStyle}>
//       <h3>{props.name}</h3>
//       <button>Buy now</button>
//     </div>
//   )
// }

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => { setCount(count + 1)};
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={ () => setCount( count - 1 )}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      {
        <ul>
          {users.map(user => <li>{user.name}</li>)}
        </ul>
      }
    </div>
  )
}

// function Person(props){
//   return (
//     <div style={{border: '1px solid red', margin: '10px'}}>
//       <h2>Name: {props.name}</h2>
//       <p>Professiona: {props.job}</p>
//     </div>
//   )
// }


export default App;
