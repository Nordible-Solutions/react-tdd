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
        { id: 2, name: 'Yeezy', brand: 'Adidas' },
        { id: 3, name: 'Classic', brand: 'Reebok' }
      ],
      selectedProducts: []
    };
  }

  handleProductSelect(product) {
    this.setState(prevState => {
      return {
        selectedProducts: prevState.selectedProducts.concat(prevState)
      }
    });
  }

  render() {
    return (
      <div>
        <h1>My product store</h1>
        <ProductList products={this.state.products} onProductSelect={this.handleProductSelect.bind(this)} />
      </div>
    );
  }
}

export default App;
