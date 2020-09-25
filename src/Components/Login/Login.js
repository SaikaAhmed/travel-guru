import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import "firebase/auth";
import Header from '../Header/Header';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [ signIn, setSignIn ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email:'',
        photo: ''
      })

      const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () =>{
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      const {displayName, photoURL, email} = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      setUser(signedInUser);
      console.log(displayName, email, photoURL);
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    })
  }

  const handleSignOut = () => {
    firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false, 
        name: '',
        phot:'',
        email:'',
        password:'',
        error:'',
        isValid:false,
        existingUser: false
      }
      setUser(signedOutUser);
      console.log(res);
    })
    .catch( err => {

    })
  }

  const is_valid_email = email =>  /(.+)@(.+){2,}\.(.+){2,}/.test(email); 
  const hasNumber = input => /\d/.test(input);
  
  const switchForm = e =>{
    const createdUser = {...user};
    createdUser.existingUser = e.target.checked;
    setUser(createdUser);
  }
  const handleChange = e =>{
    const newUserInfo = {
      ...user
    };
    //debugger;
    // perform validation
    let isValid = true;
    if(e.target.name === 'email'){
      isValid = is_valid_email(e.target.value);
    }
    if(e.target.name === "password"){
      isValid = e.target.value.length > 8 && hasNumber(e.target.value);
    }

    newUserInfo[e.target.name] = e.target.value;
    newUserInfo.isValid = isValid;
    setUser(newUserInfo);
  }

  const createAccount = (event) => {
    if(user.isValid){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res);
        const createdUser = {...user};
        createdUser.isSignedIn = true;
        createdUser.error = '';
        setUser(createdUser);
      })
      .catch(err => {
        console.log(err.message);
        const createdUser = {...user};
        createdUser.isSignedIn = false;
        createdUser.error = err.message;
        setUser(createdUser);
      })
    }
    event.preventDefault();
    event.target.reset();
  } 

  const signInUser = event => {
    if(user.isValid){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res);
        const createdUser = {...user};
        createdUser.isSignedIn = true;
        createdUser.error = '';
        setUser(createdUser);
      })
      .catch(err => {
        console.log(err.message);
        const createdUser = {...user};
        createdUser.isSignedIn = false;
        createdUser.error = err.message;
        setUser(createdUser);
      })
    }
    event.preventDefault();
    event.target.reset();
  }
   
    return (
        <div>
      <h3>Create an account</h3>
      <input type="checkbox" name="switchForm" onChange={switchForm} id="switchForm"/>
        <label htmlFor="switchForm"> Remember me</label>
      <form style={{display:user.existingUser ? 'block': 'none'}} onSubmit={signInUser}>
        <input type="text" onBlur={handleChange} name="email" placeholder="Your Email" required/>
        <br/>
        <input type="password" onBlur={handleChange} name="password" placeholder="Your Password" required/>
        <br/>
       
        <input type="submit" value="SignIn"/>
      </form>
      <form style={{display:user.existingUser ? 'none': 'block'}} onSubmit={createAccount}>
        <input type="text" onBlur={handleChange} name="name" placeholder="Your Name" required/>
        <br/>
        <input type="text" onBlur={handleChange} name="email" placeholder="Your Email" required/>
        <br/>
        <input type="password" onBlur={handleChange} name="password" placeholder="Your Password" required/>
        <br/>
        <input type="submit" value="Create an Account"/>
      </form>
      {
        user.error && <p style={{color:'red'}}>{user.error}</p>
      }

{
        user.isSignedIn ? <button onClick={handleSignOut} >Sign out</button> :
        <button onClick={handleSignIn} >Sign in With Google</button>
      }
      {
        user.isSignedIn && <div>
         <p>{user.name}</p>
        </div>
      }
            
        </div>
    );
};

export default Login;