import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: 'AirMax', brand: 'Nike' },
        { id: 1, name: 'Yeezy', brand: 'Adidas' },
        { id: 1, name: 'Classic', brand: 'Reebok' }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>My product store</h1>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;
