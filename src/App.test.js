import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component testing', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('App should display My product store on page', () => {
    const wrapper = shallow(<App/>);
    const welcome = <h1>My product store</h1>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
});
