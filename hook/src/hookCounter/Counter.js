import React, { Component, useState } from 'react'

export const Counter = () => {
    const [count, counterUpdate] = useState(0)

    console.log(useState(0))
    return (
        <div style={{ textAlign: "center" }}>
            <h3>{count}</h3>
            <div>
                <button onClick={() => counterUpdate(count + 1)}>plus</button>
                <button onClick={() => counterUpdate(count - 1)}>minus</button>
                <button onClick={() => counterUpdate(0)}>reset</button>
            </div>
        </div>
    )
}


// export default class Counter extends Component {
//     state = {
//         count : 0,
//     }
//     render() {
//         return (
//             <div style={{ textAlign: "center" }}>
//             <h3>{this.state.count}</h3>
//                 <div>
//                     <button onClick={() => this.setState({count: this.state.count + 1})}>plus</button>
//                     <button onClick={() => this.setState({count: this.state.count - 1})}>minus</button>
//                     <button onClick={() => this.setState({count: 0})}>reset</button>
//                 </div>
//             </div>
//         )
//     }
// }

// // Hook
// count [count, counterUpdate] = useState(0)
// count [age, ageUpdate] = useState(0)
// count [name, nameUpdate] = useState("name")

// // state class component
// state = {
//     count : 0,
//     age: 0,
//     name: "name"
// }
// // compare state
// count == this.state.count
// // compare function update state
// counterUpdate("....."), ageUpdate("....."), nameUpdate("....") == this.setState({count : "....", name : "....", age: "...."})