import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Book from './Components/Book/Book';
import { Error } from '@material-ui/icons';
import Login from './Components/Login/Login';
import SearchHotel from './Components/SearchHotel/SearchHotel';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
import Header from './Components/Header/Header';

export const UserContext = createContext();

function App() {
  const [ signIn, setSignIn ] = useState({UserContext});
  return (
    <div className="App">
     <UserContext.Provider value={[signIn, setSignIn]}>


   
       <Router> 
       <Header></Header>
         <Switch> 
        
           {/* <Route path="/home">
           <Home></Home>
              </Route> */}

              <Router path="/book">
              <Book></Book>
            </Router>

            
            <Router path="/login"> 
             <Login></Login>
             </Router>

             <PrivateRouter path="/searchRoom"> 
             <SearchHotel></SearchHotel>
             </PrivateRouter>

              <Route exact path="/"> 
                <Home></Home>
              </Route>

              <Router path="*"> 
              <Error></Error>
              </Router>
              
           </Switch>
            </Router>
  </UserContext.Provider>
    </div>
  );
}

export default App;
