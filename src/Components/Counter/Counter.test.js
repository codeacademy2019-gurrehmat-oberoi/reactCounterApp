import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../Counter';
import {shallow} from 'enzyme';

describe('Counter', () => {
  it('should render a counter', () => {
    const tree = renderer.create(<Counter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should set state.countVal to initial value',()=>{
    const wrapper = shallow(<Counter initialValue={10}/>);
    expect(wrapper.instance().state.countVal).toEqual(wrapper.instance().props.initialValue);
  });
  it('should increment state countVal on running incrementCountVal', () => {
    const wrapper = shallow(<Counter initialValue = {10}/>);
    const origVal = wrapper.instance().state.countVal;
    wrapper.instance().incrementCountVal();
    expect(wrapper.instance().state.countVal).toEqual(origVal+1);
  });
  it('should decrement state countVal on running decrementCountVal', () => {
    const wrapper = shallow(<Counter initialValue = {10}/>);
    const origVal = wrapper.instance().state.countVal;
    wrapper.instance().decrementCountVal();
    expect(wrapper.instance().state.countVal).toEqual(origVal-1);
  })
});