import React, { useState, useEffect } from 'react';
import '../assets/style/Artikel.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ChatIcon from '../components/Livechat/ChatIcon';
import banner from '../assets/img/photo_6224283476450983431_y.png';
import ArtikelCard from '../components/Card/ArtikelCard';
import axios from 'axios';

function Artikel() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home container-fluid p-0">
      <ChatIcon />
      <Navbar />
      <div className="container navbar-content">
        <div className="row">
          <div className="col-8">
            {articles.length > 0 && (
              <div className="d-block container-fluid text-start mb-4">
                <img src={`http://localhost:3001${articles[0].image}`} alt={articles[0].title} className="img-fluid" />
                <h1 className="mt-3">{articles[0].title}</h1>
                <p>{articles[0].content.substring(0, 100)}...</p>
                <Link to={`/artikel/${articles[0].id}`} className="text-decoration-none">
                  Baca Selengkapnya
                </Link>
              </div>
            )}
            {articles.length > 0 ? (
              <div className="d-block container my-1">
                {articles.slice(1).map((article, index) => (
                  <ArtikelCard
                    key={index}
                    image={`http://localhost:3001${article.image}`}
                    title={article.title}
                    text={article.content.substring(0, 100) + '...'}
                    id={article.id}
                  />
                ))}
              </div>
            ) : (
              <p>No articles available.</p>
            )}
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
