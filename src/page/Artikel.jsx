// src/page/Artikel.jsx
import React, { useState, useEffect } from 'react';
import '../assets/style/Artikel.css';
import Navbar from '../components/Navbar/Navbar';
import ChatIcon from '../components/Livechat/ChatIcon';
import Card from '../components/Card/ArtikelCard';
import banner from '../assets/img/photo_6224283476450983431_y.png';

function Artikel() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem('articles')) || [];
    setArticles(storedArticles);
  }, []);

  return (
    <div className="home container-fluid p-0">
      <ChatIcon />
      <Navbar />
      <div className="container navbar-content">
        <div className="row">
          <div className="col-8">
            {articles.map((article, index) => (
              <div key={index} className="d-block container-fluid text-start mb-4">
                <img src={article.image} alt={article.title} className="img-fluid" />
                <h1 className="mt-3">{article.title}</h1>
                <p>{article.content}</p>
              </div>
            ))}
          </div>
          <div className="col-4">
            <div className="container-fluid">
              <img src={banner} alt="banner" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-medblue py-5">
        <div className="container justify-content-between">
          <div className="row">
            <div className="col text-start">
              <h2 style={{ color: 'white' }}>Teman Ngobrolmu</h2>
              <h4>FAQs</h4>
              <h4>Careers</h4>
              <h4>Blog</h4>
              <h4>Media</h4>
              <h4>Service Status</h4>
              <h4>Contact Us</h4>
            </div>
            <div className="col">
              <i className="px-3 bi bi-instagram"></i>
              <i className="px-3 bi bi-twitter-x"></i>
              <i className="px-3 bi bi-twitter"></i>
              <i className="px-3 bi bi-youtube"></i>
            </div>
            <hr />
            <p className="text-start">© Copyright 2024 at Teman Ngobrolmu, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artikel;
