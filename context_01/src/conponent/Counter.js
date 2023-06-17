import React, { useReducer, useState } from "react";

let reducer = (state, action) => {
    switch (action.type) { 
        case "increment":
            return { ...state, counter: state.counter + 1};
        case "decrement":
            return { ...state, counter: state.counter - 1};
        case "reset" :
            return { ...state, counter: 0 }
        case "addText":
            return { ...state, text:[...state.text, action.text] }
        default:
            return state
    }
}

let Counter = () => {
    let [state, dispatch] = useReducer(reducer, { counter: 0, text: [] })
    let [text, setText] = useState("")
    return (
        <div style={{textAlign:"center"}} >
                {state.counter}
            <div>
                <button onClick={() => dispatch({type: "increment"})}> plus </button>
                <button onClick={() => dispatch({type: "decrement"})}> minus </button>
                <button onClick={() => dispatch({type: "reset"})}> reset </button>
            </div>
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    dispatch({ type: "addText", text})
                    setText('')
                }}>
                    <input type="text" value={text} onChange={e=>setText(e.target.value)} />
                </form>
                <ul>
                    {state.text.map( text => <li>{text}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Counter;