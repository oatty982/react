import React, { Component } from 'react'
import '../App.css'
import next from "./arrow.png"
export default class TodoList extends Component {
    state={
        todo: [],
        complete: [],
        text: "" 
    }
    addTodo = ()=> {
        this.setState({todo: [...this.state.todo, this.state.text], text: ""})
    }
    move = (idx) => {
        let list = [...this.state.todo]
        this.setState({complete: [...this.state.complete, list.splice(idx, 1)], todo: list})
    }
    reverse = (idx) => {
        let list = [...this.state.complete]
        this.setState({todo: [...this.state.todo, list.splice(idx, 1)], complete: list})
    }
    delete = (idx) => {
        let list = [...this.state.complete]
        list.splice(idx, 1)
        this.setState({complete: list})
    }
    edit = (idx) => {
        let list = [...this.state.todo]
        let editText = prompt("edit your text")

        if (editText === null || editText === undefined || editText === false){
            return null
        } else { list.splice(idx,1, editText) } 
        this.setState({todo: list})
    }
    render() {
        return (
            <div style={{margin: "50px auto", display: "grid", gridTemplateColumns: "50% 50%", width: "600px", justifyContent:"center", gridColumnGap: "10px", height: "400px"}}>
                <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column", width:"100%", backgroundColor:"whitesmoke"}}>
                    <div>
                        <h3 style={{width:"100%", backgroundColor:"gray"}}>todoList </h3>
                        <ul style={{listStyle: "none", color: "black"}} className="todolist">
                            {this.state.todo.map((ele, idx) => <li> <span onClick={() => this.edit(idx)}> {ele} </span><img src={next} className="next" style={{width: "20px", position:"relative", top: "5px"}} onClick={() => this.move(idx)} /></li>)}
                        </ul>
                    </div>
                    <div>
                        <input type="text" value={this.state.text} onChange={(e)=> this.setState({text: e.target.value})}/> <button onClick={this.state.text.length > 0 && this.addTodo }>add</button>
                    </div>
                </div>
                <div style={{backgroundColor:"wheat", height: "100%", width:"100%"}} >
                    <h3 style={{width: "100%", backgroundColor: "gray"}}> complete </h3>
                    <ul style={{listStyle:"none", color: "black"}} className="todolist">
                        {this.state.complete.map((ele, idx) => <li ><span onClick={()=> this.reverse(idx)}>{ele} </span>  <input type="button" onClick={()=> this.delete(idx)} className="del" value="X"/></li> )}
                    </ul>
                </div>
            </div>
        )
    }
}
