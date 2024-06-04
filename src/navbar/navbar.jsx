import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/TemanNgobrolmu.png' // Ganti dengan path yang benar ke logo Anda
import './navbar.css'

const Navbar = () => {
  return (
   <nav className='navbar navbar-expand-lg navbar-light'>
            <div className='container'>
                <Link className='navbar-brand' to='#'>
                    <img src={Logo} alt='Logo' height='50' className='rounded-logo' />
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse justify-content-center'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mx-auto mb-2 mb-lg-0 nav-background rounded-5'>
                        <li className='nav-item my-0'>
                            <Link
                                className='nav-link active nav-link-custom rounded-pill px-4 py-2'
                                aria-current='page'
                                to='/'
                            >
                                Beranda
                            </Link>
                        </li>
                        <li className='nav-item my-0'>
                            <Link
                                className='nav-link nav-link-custom rounded-pill px-4 py-2'
                                to='/chatbot'
                            >
                                Chatbot
                            </Link>
                        </li>
                        <li className='nav-item my-0'>
                            <Link
                                className='nav-link nav-link-custom rounded-pill px-4 py-2'
                                to='/artikel'
                            >
                                Artikel
                            </Link>
                        </li>
                    </ul>
                    <form className='d-flex ms-3' role='search'>
                        <Link className='btn btn-light rounded-pill px-4 py-2' to='/signin'>
                            Sign In
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar