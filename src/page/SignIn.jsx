import React from 'react'
import '../assets/style/SignIn.css'
import { Link } from 'react-router-dom'
import LoginImage from '../assets/img/login.png'

function SignIn () {
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
            <p className='text-secondary fw-bold'>
              Sign In to Teman Ngobrolmu to get started
            </p>
            <h1>Sign In</h1>
            <p>Welcome back! Please log into your account.</p>
            <form className='mt-5'>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
