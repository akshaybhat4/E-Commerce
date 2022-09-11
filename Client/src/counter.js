import React, {useReducer} from "react";

const initialState = {
    first: 0,
    second: 10
}
const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return { ...state, first : state.first + action.value}
        case "decrement":
            return { ...state, first : state.first - action.value}
        case "incrementF":
                return {...state, second : state.second + action.value}
        case "decrementS":
            return {...state, second : state.second - action.value}
        case "reset":
            return initialState
        default:
            return state
    }
}

export function Counter(){
    const [count, dispatch] = useReducer(reducer, initialState)

    return ( 
    <div className="cal">
        <div>First Counter - {count.first} </div>
        <div>Second Counter - {count.second} </div>
        <div className="buttons">
            <button className="buttons" onClick= { () => dispatch({ type:'increment', value: 1 })}>Increment</button>
            <button className="buttons" onClick= { () => dispatch({ type:'decrement', value: 1 })}>Decrement</button><br />
            <button className="buttons" onClick= { () => dispatch({ type:'incrementF', value: 1 })}>Increment 2nd</button>
            <button className="buttons" onClick= { () => dispatch({ type:'decrementS', value: 1 })}>Decrement 2nd</button><br />
            <button className="buttons" onClick= { () => dispatch({type:'reset'})}>Reset</button>
        </div>
    </div>
    )
}
