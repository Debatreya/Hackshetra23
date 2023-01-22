import React from "react";
import './login.css';

function teacherLogin() {
    return(
        <form>
        <h3>LOGIN</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <a  href="studashboard.html"><button type="button" class="btn btn-dark login">Login</button></a>
        <a  href="studashboard.html"><button type="button" class="btn btn-dark">Signup</button></a>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
    );
}

export default teacherLogin;