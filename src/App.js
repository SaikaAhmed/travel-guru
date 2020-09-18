import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Book from './Components/Book/Book';

function App() {
  return (
    <div className="App">
       
       <Router> 
         <Switch> 
           <Route path="/home">
           <Home></Home>
              </Route>

              <Router path="/book/:place">
              <Book></Book>
            </Router>

              <Route exact path="/"> 
                <Home></Home>
              </Route>
              
           </Switch>
            </Router>
  
    </div>
  );
}

export default App;
