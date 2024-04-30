import React from 'react';
import ReactDOM from "react-dom";
import {Provider } from 'react-redux'
import {BrowserRouter,Route,Switch, Link,NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense,editExpense} from './actions/expenses'
import 'react-dates/lib/css/_datepicker.css'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();
console.log('test')

const jsx = (
     <Provider store={store}>
        <AppRouter/>
     
     </Provider>
)


ReactDOM.render(jsx,document.getElementById('app'))