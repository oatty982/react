import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Topics from "./pages/Topics";
import Greeting from "./pages/Greeting";

import "./App.css"

export default function App() {
  return (
    <div className="app">

      <Navbar />

      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/greeting/:name" component={Greeting} />

        {/* <Route path="/about"><About /></Route>
        <Route path="/topics"><Topics /></Route>
        <Route path="/"><Home /></Route> */}
      
      </Switch>
    </div>
  );
}





