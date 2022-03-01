import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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

    it('should add 1 to 4 and get 5', () => {
  const button4 = container.find('#number4');
  const operator_add = container.find('#operator_add');
  const button1 = container.find('#number1');
  const operator_equals = container.find('#operator-equals'); 
  const runningTotal = container.find('#running-total');
  button4.simulate('click');
  operator_add.simulate('click');
  button1.simulate('click');
  operator_equals.simulate('click');
  expect(runningTotal.text()).toEqual('5');
    })

    it('should subtract 4 from 7 and get 3', () => {
      const button4 = container.find('#number4');
      const operator_subtract = container.find('#operator-subtract');
      const button7 = container.find('#number7');
      const operator_equals = container.find('#operator-equals'); 
      const runningTotal = container.find('#running-total');
      button7.simulate('click');
      operator_subtract.simulate('click');
      button4.simulate('click');
      operator_equals.simulate('click');
      expect(runningTotal.text()).toEqual('3');
    })

    it('should multiply 3 by 5 and get 15', () => {
      const button3 = container.find('#number3');
      const button5 = container.find('#number5');
      const operator_multiply = container.find('#operator-multiply'); 
      const operator_equals = container.find('#operator-equals'); 
      const runningTotal = container.find('#running-total');
      button3.simulate('click');
      operator_multiply.simulate('click');
      button5.simulate('click');
      operator_equals.simulate('click');
      expect(runningTotal.text()).toEqual('15');
    })

    it('divide 21 by 7 and get 3', () => {
      const button2 = container.find('#number2');
      const button1 = container.find('#number1');
      const button7 = container.find('#number7');
      const operator_divide = container.find('#operator-divide'); 
      const operator_equals = container.find('#operator-equals'); 
      const runningTotal = container.find('#running-total');
      button2.simulate('click');
      button1.simulate('click');
      operator_divide.simulate('click');
      button7.simulate('click');
      operator_equals.simulate('click');
      expect(runningTotal.text()).toEqual('3');
    })


    it('should concatenate multiple number button clicks, 42 to give 42', () => {
      const button4 = container.find('#number4');
      const button2 = container.find('#number2');
      const runningTotal = container.find('#running-total');
      button4.simulate('click');
      button2.simulate('click');
      expect(runningTotal.text()).toEqual('42');
    })

    it('should chain multiple operations together, (3+4)x2 to give 14', () => {
      const button4 = container.find('#number4');
      const button3 = container.find('#number3');
      const button2 = container.find('#number2');
      const operator_add = container.find('#operator_add'); 
      const operator_multiply = container.find('#operator-multiply'); 
      const operator_equals = container.find('#operator-equals'); 
      const runningTotal = container.find('#running-total');
      button3.simulate('click');
      operator_add.simulate('click');
      button4.simulate('click');
      operator_multiply.simulate('click');
      button2.simulate('click');
      operator_equals.simulate('click');
      expect(runningTotal.text()).toEqual('14');
    })
})

