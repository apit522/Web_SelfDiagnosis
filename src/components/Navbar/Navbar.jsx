import React, { useState }  from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/img/icon/logo_navbar.png"; // Ganti dengan path yang benar ke logo Anda
import "../../assets/style/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const foto = localStorage.getItem('foto');
  const nama = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <nav
      className="navbar navbar-expand-lg home-bg fixed-top navbar-light"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img src={Logo} alt="Logo" height="50" className="rounded-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-background rounded-5 align-items-center">
            <li className="nav-item my-0">
              <Link
                className={`nav-link nav-link-custom rounded-pill px-4 py-2 ${
                  pathname === "/home" ? "active" : ""
                }`}
                aria-current="page"
                to="/home"
              >
                Beranda
              </Link>
            </li>
            <li className="nav-item my-0">
              <Link
                className={`nav-link nav-link-custom rounded-pill px-4 py-2 ${
                  pathname === "/chat" ? "active" : ""
                }`}
                aria-current="page"
                to="/chat"
              >
                Chatbot
              </Link>
            </li>
            <li className="nav-item my-0">
              <Link
                className={`nav-link nav-link-custom rounded-pill px-4 py-2 ${
                  pathname === "/artikel" || pathname === "/detail-artikel"
                    ? "active"
                    : ""
                }`}
                aria-current="page"
                to="/artikel"
              >
                Artikel
              </Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <div className="dropdown">
              <button
                className="btn btn-light rounded-5 px-3 py-2 dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {foto && <img src={foto} alt="" style={{ maxWidth: '40px' }} />}
                <span className="mx-2">{nama}</span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="btn btn-light rounded-pill px-4 py-2" to="/signin">
              Sign In
            </Link>
          )}
          {/* <form className="d-flex justify-content-center ms-3" role="search">
            <Link className="btn btn-light rounded-pill px-4 py-2" to="/signin">
              Sign In
            </Link>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
