import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Login';
import teacherLogin from './teacherLogin';
import Signup from './Signup';
import Home from './Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

function App() {  
  return (
    <main id="main">
    <nav className="navbar navbar-expand-lg bg-body-light navbar bg-light" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="index.html">Manageria</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./student.html">Add Student</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./teacher.html">Add Teacher</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./class.html">Add Class</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
<div className="container">
      <div className="left">
        <i><h2>WELCOME</h2><h2>To</h2></i><h1><b>MANAGERIA</b></h1><hr /><h3>School Management Made Easy</h3>
      </div>
      <div className="right">
        <h2>Login Here</h2>
        <hr />
        <div className="button">
        <a type="button" className='btn btn-dark' onClick={()=> {
            root.render(
              <React.StrictMode>
                <Login />
              </React.StrictMode>
            );
        }}>Login</a>
        <a type="button" className='btn btn-dark' onClick={()=> {
            root.render(
              <React.StrictMode>
                <Signup />
              </React.StrictMode>
            );
        }}>Signup</a>
      </div>
      </div>
    </div>
  </main>
  );
}

export default App;
