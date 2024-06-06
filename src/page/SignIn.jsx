// frontend/src/components/SignIn.js
import React, { useState } from 'react';
import '../assets/style/SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import LoginImage from '../assets/img/login.png';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/signin', { email, password });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      // Ambil nama foto dari hasil query
      const fotoNama = response.data.foto;
      // Gabungkan nama foto dengan path direktori
      const fotoPath = `/foto_profile/${fotoNama}`;
      // Set data foto ke local storage
      localStorage.setItem('foto', fotoPath);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('username', response.data.username);

      setMessage(response.data.message);
      navigate('/home');
      // window.location.reload();
      console.log(response.data);
      // Handle token storage and redirection if needed
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className='container-fluid p-0 vh-100'>
      <div className='row m-0 h-100'>
        <div
          className='col-lg-5 d-none d-lg-flex align-items-center justify-content-center p-0 image-column'
          style={{
            backgroundImage: `url(${LoginImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top'
          }}
        ></div>
        <div className='col-lg-7 col-12 p-5 d-flex align-items-center justify-content-center'>
          <div className='signin-container w-100'>
            <a href="/home" className='border-0' >
              {/* <img src={icoBack} alt="" style={{maxWidth:'50px'}} className="img-fluid" /> */}
              <i class="btn border-0 p-0 bi bi-arrow-left-circle-fill" style={{ fontSize: '40px' }}></i>
            </a>
            <p className='text-secondary fw-bold'>
              Sign In to Teman Ngobrolmu to get started
            </p>
            <h1>Sign In</h1>
            <p>Welcome back! Please log into your account.</p>
            <form className='mt-5' onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label className='form-label' htmlFor='email'>
                  Username
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  aria-describedby='emailHelp'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id='emailHelp' className='form-text'>
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className='mb-3'>
                <label className='form-label' htmlFor='password'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type='submit'
                className='my-4 btn btn-primary rounded w-100'
              >
                Sign In
              </button>
              <div className='my-3 text-center'>
                <figcaption className='blockquote-footer text-dark'>
                  Or Sign In With <cite title='Sign In'>Sign Up</cite>
                </figcaption>
              </div>
              <p className='text-center'>
                New User?{' '}
                <Link to='/signup' className='fw-bold text-dark'>
                  Sign Up
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

export default SignIn;
