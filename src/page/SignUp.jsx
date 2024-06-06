// frontend/src/components/SignUp.js
import React, { useState } from 'react';
import '../assets/style/SignIn.css';
import { Link } from 'react-router-dom';
import LoginImage from '../assets/img/login.png';
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/signup', { username, email, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="container-fluid p-0 vh-100">
      <div className="row m-0 h-100">
        <div
          className="col-lg-5 d-none d-lg-flex align-items-center justify-content-center p-0 image-column"
          style={{
            backgroundImage: `url(${LoginImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top"
          }}
        ></div>
        <div className="col-lg-7 col-12 p-5 d-flex align-items-center justify-content-center">
          <div className="signin-container w-100">
            <p className="text-secondary fw-bold">
              Sign up to Teman Ngobrolmu to get started
            </p>
            <h1>Sign Up for free</h1>
            <p>Please create your account.</p>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  aria-describedby="emailHelp"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="my-4 btn btn-primary rounded w-100"
              >
                Sign Up
              </button>
              <p className="text-center">
                Have account?{" "}
                <Link to="/signin" className="fw-bold text-dark">
                  Sign In
                </Link>
              </p>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
