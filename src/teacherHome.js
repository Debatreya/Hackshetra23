import React from "react";
import './teacherHome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Route } from 'react-router-dom';

function teacherHome() {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-dark navbar bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">Manageria</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="student.html">Add Student</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="teacher.html">Add Teacher</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="class.html">Add Class</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search here" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    <div class="wrapper">
    <nav id="sidebar">
            <div class="sidebar-header">
              <img src="teach_profile.png" alt="profile" />
                <h3>Teacher Profile</h3>
                <hr />
            </div>
            <ul class="list-unstyled components">
                <li>
                    <a href="assignment_teach.html">Assignment</a>
                </li>
                <hr />
                <li>
                    <a href="classes.html">Classes</a>
                </li>
                <hr />
               <li>
                    <a href="#">Class Notes </a>
                </li> 
            </ul>
        </nav>
        <div class="container text-center">
          <div class="row cols-2">
            <div class="col">
              <form action="" method="get">
              <table class="table">
                <label for="username"><h4>Class-</h4></label>
         <input type="text" placeholder="XII" id="class" />
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Roll No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Attendance</th>
                    <th scope="col">Grades</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td aria-placeholder="Name"><input type="text" placeholder="Name" id="Name" /></td>
                    <td><input type="checkbox" checked /></td>
                    <td><input type="text" id="grade" /></td>
                  </tr>
                </tbody>
              </table>
              <button type="submit">Submit</button>
            </form>
            </div>
            <div class="col">
              <div class="content">
                <h3>Upcoming Classes</h3>
                <div class="upcom it1">Next class at 8:00 in class CS1</div>
                <div class="upcom it2">Next class at 11:35 in class CS4</div>
                <div class="upcom it3">Next class at 16:00 in class ME2</div>
                <div class="upcom it4">Next class at 18:30 in class PI3</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </>

    );
}

export default teacherHome;