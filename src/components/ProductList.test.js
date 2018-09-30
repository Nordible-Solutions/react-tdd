import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';

describe('Product list testing', () => {

    let mockProducts, wrapper, productSelectFn;

    beforeEach(() => {
        mockProducts = [
            { id: 1, name: 'Mock Product 1', brand: 'MockBrandA' },
            { id: 2, name: 'Mock Product 2', brand: 'MockBrandB' },
            { id: 3, name: 'Mock Product 3', brand: 'MockBrandC' },
        ];

        wrapper = shallow(<ProductList products={mockProducts} onProductSelect={() => { }} />);

        productSelectFn = jest.fn(); //(productSelected) => console.log(`You selected: ${productSelected}`);
    });

    afterEach(() => {
        productSelectFn.mockReset();
    })

    it('should render an `li` element for each element in the `props.products`', () => {
        expect(wrapper.find('li').length).toEqual(mockProducts.length);
    });

    it('should display the product name in each `<li>` element', () => {
        const firstElement = wrapper.find('li').first();
        // Check that the product name is contained somewhere in this element
        expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
    });

    it('should display the product brand in each `<li>` element', () => {
        const firstElement = wrapper.find('li').first();
        // Check that the product name is contained somewhere in this element
        expect(firstElement.contains(mockProducts[0].brand)).toEqual(true);
    });

    it('should call `props.onProductSelect` when an <li> is clicked', () => {
        const firstElement = wrapper.find('li').first();

        //verify that the function is not called yet
        expect(productSelectFn.mock.calls.length).toEqual(0);

        //click the li
        firstElement.simulate('click');

        //check that the function is now called
        expect(productSelectFn.mock.calls.length).toEqual(1);

        //check that the function is called with the right arguments
        expect(productSelectFn.mock.calls[0][0]).toEqual(mockProducts[0]);
    });

});
