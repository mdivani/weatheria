import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './js/layout/App';
import Adapter from 'enzyme-adapter-react-16';
import {Button} from 'react-bootstrap';

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />); 
})

describe('App component testing', function() {
  it('renders welcome message', function() {

    const welcome = <h1 className='App-title'>Welcome to React</h1>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
  it('renders bss button', function() {
    const bsButton = <Button bsStyle='primary' bsSize='large'>Bootstrap Button</Button>;
    expect(wrapper.contains(bsButton)).to.equal(true);
  });
});

