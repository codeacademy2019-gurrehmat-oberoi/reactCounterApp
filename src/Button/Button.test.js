import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
import Button from './Button';


describe('Button', () => {
  it('should render a button', () => {
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});