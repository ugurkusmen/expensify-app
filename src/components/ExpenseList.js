import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from './ExpenseListItem.js'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.lenght === 0 ? (
            <p>No expenses</p>
        ):(
            <div>
            <h1>Expense List</h1>
            {props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} {...expense}/>
            })} 
            </div>
        )
    }
        
        

    </div>
)


const mapStateToProps = (state) => {
    return {
        expenses:selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)


