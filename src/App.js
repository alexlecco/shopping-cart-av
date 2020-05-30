import React from 'react';
import './App.css';
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Shopping Cart Example</h2>
      <hr/>
      <ProductsContainer />
      <hr/>
      <CartContainer />
      </header>
    </div>
  );
}

export default App;
