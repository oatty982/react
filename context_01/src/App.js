import React, {useState} from 'react';
import './App.css';
import Home from './conponent/Home';
import Context, { Context2 } from './Context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Counter from './conponent/Counter';
import Example from './conponent/Example';

function App() {
  let [state, setState] = useState({content: "Hello, World"})
  return (
    <Context2.Provider value={{state, setState}}>
      <Router>
      <Switch>
        {/* Define your routes using <Route> components */}
        <Route exact path="/" component={Home} />
        <Route path="/Counter" component={Counter} />
        <Route path="/ex" component={Example} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
    </Context2.Provider>
  );
}

export default App;


