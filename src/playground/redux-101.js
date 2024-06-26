import { Switch } from "react-router-dom";
import { createStore } from "redux";

const incrementCount = ({incrementBy=1}={})=>(
    {
        type:'INCREMENT',
        incrementBy
    }
)
const decrementCount = ({decrementBy=1}={})=>(
    {
        type:'DECREMENT',
        decrementBy

    }
)
const resetCount = ()=>(
    {
        type:'RESET',
    }
)
const setCount = ({count=0}={})=>(
    {
        type:'SET',
        count
    }
)
const countReducer = (state={count:0},action)=>{
    switch (action.type) {
        case 'INCREMENT':
            
            return{
                count:state.count + action.incrementBy
            }
        case 'DECREMENT':
            
            return{
                count:state.count-action.decrementBy
            }
        case 'RESET':
            return{
                count:0
            } 
        case 'SET':
            return {
                count: action.count
            }      
    
        default:
            return state;
            
    }
}

const store = createStore(countReducer);

const unsubcribe = store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(incrementCount({incrementBy:10}))
store.dispatch(incrementCount({incrementBy:10}))
store.dispatch(decrementCount({decrementBy:5}))
store.dispatch(resetCount())
store.dispatch(setCount({count:105}))