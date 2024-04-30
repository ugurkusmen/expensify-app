import React from 'react'
import {shallow} from "enzyme";
import  {EditExpensePage}  from "../../components/EditExpensePage";
import expenses from '../fixtures/expenses'


let editExpense,history,wrapper,removeExpense;

beforeEach(()=>{
    editExpense = jest.fn()
    history = {push:jest.fn()}
    removeExpense= jest.fn()
    wrapper = shallow( 
        <EditExpensePage 
        editExpense={editExpense} 
        history={history}
        removeExpense={removeExpense}
        expense={expenses[2]}
        />)
})


test('should render Edit correctly', ()=>{
    
    expect(wrapper).toMatchSnapshot()


})

test('should handle editExpense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenCalledWith(expenses[2].id,expenses[2])
})

test('should handle removeExpense',()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({
        id:expenses[2].id
    })
})


