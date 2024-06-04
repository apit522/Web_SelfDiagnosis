import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="addUser">
            <h3>Sign Up</h3>
            <form className="addUserForm">
                <div className="inputGroup">
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text"
                    id="name"
                    autoComplete="off"
                    placeholder="Enter Your name" 
                    />
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
                    <Link type="submit" class="btn btn-success">
                        Sign Up
                    </Link>
                </div>
            </form>
            <div className="login">
                <p>Already have an account <a href="/login"> Login</a></p>
            </div>
        </div>
    );
}
export default Signup