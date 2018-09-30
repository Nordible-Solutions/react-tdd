import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.products.map(product => (
                        <li onClick={() => this.props.onProductSelect(product)} key={product.id}>
                            {product.name} {product.brand}
                        </li>
                    ))
                }
            </ul>
        )
    }
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    onProductSelect: PropTypes.func.isRequired
};

export default ProductList;
