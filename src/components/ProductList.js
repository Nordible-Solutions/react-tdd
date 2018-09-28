import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.products.map(product => {
                        <li key={product.id}>
                            {product.name}
                        </li>
                    })
                }
            </ul>
        )
    }
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductList;
