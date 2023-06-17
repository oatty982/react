import React, {useContext} from 'react';
import logo from '../logo.svg';
import Context,{ Context2 } from '../Context';

const Home = () => {
  let {state, setState} = useContext(Context2)
  console.log({state})

  return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <span> {state.content}</span>
          </p>
          <button onClick={()=> setState([])}> change Wolrd</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

  )
}

export default Home;
