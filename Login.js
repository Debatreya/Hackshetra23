import React from "react";
import './login.css';
import { createRoot } from "react-dom/client";
import { useRef } from "react";
import { useState } from "react";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {auth} from "./firebaseSetup";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
// import teacherHome from './teacherHome';

// import {Route, Routes } from 'react-router-dom';
// const dataRef = useRef();

const teacher_mail = "aman_dh@gmail.com";
const teacher_pass = "teacher";

const student_mail = "shweta@gmail.com";
const student_pass = "student";

function Login() {
  // const navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useState(null); 
  // const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("")   
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();    
  //   console.log(auth)
  //   try {
  //     signInWithEmailAndPassword(auth,email, password).then((user)=>{
  //        alert(user);
  //     });      
  //     // setCurrentUser(true);
  //   } catch (error) {
  //     console.error(error)
  //     alert(error);
  //   }
  // };
    return(
      <form>
      <h3>LOGIN</h3>

      <label for="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username" />

      <label for="password">Password</label>
      <input type="password" placeholder="Password" id="password" />

      <a href="./studentHome.html"><button type="button" class="btn btn-dark login">Student Login</button></a>
      <a href="./teachdashboard.html"><button type="button" class="btn btn-dark">Teacher Login</button></a>
      <div class="social">
        <div class="go"><i class="fab fa-google"></i>  Google</div>
        <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
      </div>
  </form>
    );
}

export default Login;