import {createStore, combineReducers} from 'redux'
import { v4 as uuidv4 }   from 'uuid'


    
//filter

store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})
const expenseTwo = store.dispatch(addExpense({description:'rent',amount:1000}))
const item= store.dispatch(addExpense({description:'car',amount:300,createdAt:1000}))
store.dispatch(sortByAmount())
/* store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}))
store.dispatch(removeExpense({id:item.expense.id}))
store.dispatch(setTextFilter('rent'))
store.dispatch(sortByAmount())
store.dispatch(sortByDate())  */
//store.dispatch(setStartDate(125))








/* const demoState = {
    expenses:[{
        id:'sadasdasdas',
        description:'january rent',
        note:'this was the final payment for that address',
        amount:54500,
        createdAd:0
    }],
    filters:{
        text:'rent',
        sortBy:'date', // date or amount
        startDate:undefined,
        endDate:undefined
    }
}; */