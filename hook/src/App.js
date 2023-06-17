import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todoClass/todo'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Counter} from './hookCounter/Counter'
import {TodoList} from './todoHook/TodoList'

function App() {
  return (
    <Switch>
      <Route exact path='/'><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Todo />
      </header>
    </div> </Route>
  <Route path="/hook">
    <Counter />
  </Route>
  <Route path="/todo">
    <TodoList />
  </Route>
    </Switch>
    
  );
}

export default App;
