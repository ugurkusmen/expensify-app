import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'


test('should render ExpenseForm correctly',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})


test('render expenseform with expense data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change',()=>{
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value)
})
test('should set note on input change',()=>{
    const value = 'New note'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount in right way',()=>{
    const value = '22.33'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value)
})
test('should set amount in wrong way',()=>{
    const value = '22.333'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe('')
})

test('sould call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy = jest.fn()
   const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
   wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}

   })
   expect(wrapper.state('error')).toBe('')
   expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description:expenses[0].description,
    amount:expenses[0].amount,
    note:expenses[0].note,
    createdAt:expenses[0].createdAt

   })
})

test('should set new date on date change',()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})


test('should set calendar focus  on date change',()=>{
    const focused = true
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toEqual(focused)
})