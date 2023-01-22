import React from "react";
import './login.css';
import { createRoot } from "react-dom/client";
import { User } from "firebase/auth";
import { useRef } from "react";
import { useState } from "react";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {auth} from "./firebaseSetup";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// import teacherHome from './teacherHome';

// import {Route, Routes } from 'react-router-dom';
// const dataRef = useRef();


function Signup() {
  const [currentUser, setCurrentUser] = useState(null); 
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")   
  
  const handleSubmit = (e) => {
    e.preventDefault();    
    console.log(auth)
    try {
      createUserWithEmailAndPassword(auth,email, password).then((user)=>{
        console.log(user)
      });      
      // setCurrentUser(true);
    } catch (error) {
      console.error(error)
      alert(error);
    }
  };
    return(
        <form onSubmit={handleSubmit}>
        <h3>LOGIN</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <a><button type="submit" class="btn btn-dark login">Teacher</button></a>
        <a><button type="submit" class="btn btn-dark">Student</button></a>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
    );
}

export default Signup;