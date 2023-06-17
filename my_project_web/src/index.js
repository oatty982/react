import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'antd/dist/reset.css';

const root = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  root
);

reportWebVitals();
