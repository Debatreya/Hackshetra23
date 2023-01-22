import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react';
import {Link } from 'react-router-dom';

function Home() {
    return (
        <main>
          <div className="container">
            <div className="left">
              <i><h2>WELCOME</h2><h2>To</h2></i><h1><b>MANAGERIA</b></h1><hr /><h3>School Management Made Easy</h3>
            </div>
            <div className="right">
              <h2>Login Here</h2>
              <hr />
              <div className="button">
              <a type='button'><button type="button" className="btn btn-dark">Student Login</button></a>
              <a type="button"><button type="button" className="btn btn-dark">Teacher Login</button></a>
            </div>
            </div>
          </div>
    </main>
    );
}

export default Home;