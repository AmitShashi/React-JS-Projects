import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 

//ReactDOM.render( <App />, document.getElementById('root'));  //old code

//updated code by amit.  
import { createRoot } from 'react-dom/client';
 
createRoot(document.getElementById('root')).render(<App tab="home" />);