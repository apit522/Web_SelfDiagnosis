import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="addUser">
            <h3>Sign In</h3>
            <form className="addUserForm">
                <div className="inputGroup">
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Enter Your email" 
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                    type="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Enter password" 
                    />
                    <Link to="/home" type="button" class="btn btn-success">
                        Login
                    </Link>
                </div>
            </form>
            <div className="login">
                <p>Don't have account?<a href="/signup"> Sign Up</a></p>
            </div>
        </div>
    );
}
export default Login