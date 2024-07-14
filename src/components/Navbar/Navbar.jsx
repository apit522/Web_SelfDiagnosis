import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/img/icon/logo_navbar.png"; // Sesuaikan dengan path logo Anda
import "../../assets/style/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [foto, setFoto] = useState(localStorage.getItem('foto'));
  const [nama, setNama] = useState(localStorage.getItem('username'));
  const [isAdmin, setIsAdmin] = useState(false); // State untuk menentukan apakah pengguna adalah admin

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT
          setIsAdmin(decodedToken.role === 1); // Set state isAdmin jika role = 1 (admin)
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('foto');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg home-bg fixed-top navbar-light" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img src={Logo} alt="Logo" height="50" className="rounded-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-background rounded-5 align-items-center">
            <li className="nav-item my-0">
              <Link className={`nav-link nav-link-custom rounded-pill px-4 py-2 ${pathname === "/home" ? "active" : ""}`} aria-current="page" to="/home">
                Beranda
              </Link>
            </li>
            <li className="nav-item my-0">
              <Link className={`nav-link nav-link-custom rounded-pill px-4 py-2 ${pathname === "/chat" ? "active" : ""}`} aria-current="page" to="/chat">
                Chatbot
              </Link>
            </li>
            <li className="nav-item my-0">
              <Link className={`nav-link nav-link-custom rounded-pill px-4 py-2 ${pathname === "/artikel" || pathname === "/detail-artikel" ? "active" : ""}`} aria-current="page" to="/artikel">
                Artikel
              </Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <div className="dropdown">
              <button
                className="btn btn-light rounded-5 px-3 py-2 d-flex align-items-center"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {foto && (
                  <img
                    src={foto}
                    alt="profile"
                    className="rounded-circle"
                    style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                  />
                )}
                <span className="mx-2">{nama}</span>
                <i className="bi bi-caret-down-fill"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/profile">
                    <i className="bi bi-person-circle me-2"></i>
                    Profile
                  </Link>
                </li>
                {isAdmin && (
                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="/dashboard">
                      <i className="bi bi-speedometer2 me-2"></i>
                      Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <button className="dropdown-item d-flex align-items-center" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="btn btn-light rounded-pill px-4 py-2" to="/signin">Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
