import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { eq } from 'cypress/types/lodash';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const buttonAdd = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals');
    button1.simulate("click");
    buttonAdd.simulate("click");
    button4.simulate("click");
    buttonEquals.simulate("click");
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to subtract', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    const runnningTotal = container.find('#running-total');
    expect(runnningTotal.text()).toEqual('3');
  })

  it('should be able to multiply', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiply = container.find('#operator-multiply');
    const equals = container.find('#operator-equals');
    button3.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divide = container.find('#operator-divide');
    const equals = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    divide.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    const runnintTotal = container.find('#running-total');
    expect(runnintTotal.text()).toEqual('3');
  })

  it('should be able to click numbers', () => {
    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    button1.simulate('click');
    button2.simulate('click');
    button3.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('123');
  })

  it('should be able to chain operations together', () => {
    const button2 = container.find('#number2');
    const button5 = container.find('#number5');
    const button1 = container.find('#number1');
    const subtract = container.find('#operator-subtract');
    const add = container.find('#operator_add');
    const equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button5.simulate('click');
    add.simulate('click');
    button2.simulate('click');
    subtract.simulate('click');
    button1.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('6');
  })

  it('should be able to clear', () => {
    const button2 = container.find('#number2');
    const button5 = container.find('#number5');
    const button1 = container.find('#number1');
    const subtract = container.find('#operator-subtract');
    const add = container.find('#operator_add');
    const equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    const clear = container.find('#clear')
    button5.simulate('click');
    add.simulate('click');
    button2.simulate('click');
    subtract.simulate('click');
    button1.simulate('click');
    equals.simulate('click');
    clear.simulate('click');
    expect(runningTotal.text()).toEqual('0');
  })

})
