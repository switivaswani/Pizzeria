import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Breakpoint,BreakpointProvider} from 'react-socks';
import {BrowserRouter,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Order from './Order';
import Build from './Build';
import Cart from './Cart';

ReactDOM.render(
  <BrowserRouter>
  <div>
  <Route path="/" component={App}/>
    <Route path="/Home" component={Home}/>
    <Route path="/Order" component={Order}/>
    <Route path="/Build" component={Build}/>
    <Route path="/Cart" component={Cart}/>

  </div>
  </BrowserRouter>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
