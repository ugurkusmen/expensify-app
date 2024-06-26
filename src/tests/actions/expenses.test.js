import { addExpense,removeExpense,editExpense } from "../../actions/expenses";



test('should setup remove expense action object',()=>{
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})


test('should setup edit expense action',()=>{
    const action = editExpense('123abc',{note:'New note value'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:'New note value'
        }
    })
})

test('should setup add expense action objcet with provided balues',()=>{
    const expenseData = {
        description:'Rent',
        amount:1095,
        createdAt:1000,
        note:'This was last months rent'
    }
    const expense = addExpense(expenseData)
    expect(expense).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
})

test('should setup add expense action objcet with default balues',()=>{
    const expense = addExpense()
    expect(expense).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id:expect.any(String)
        }
    })
})