import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/style/Artikel.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ChatIcon from "../components/Livechat/ChatIcon";
import banner from "../assets/img/photo_6224283476450983431_y.png";
import axios from "axios";

function DetailArtikel() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/articles/${id}`)
      .then(response => setArticle(response.data))
      .catch(error => console.error(error));

    // Fetch related articles if needed
    axios.get(`http://localhost:3001/api/articles`)
      .then(response => setRelatedArticles(response.data.filter(a => a.id !== parseInt(id))))
      .catch(error => console.error(error));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home container-fluid p-0">
      <ChatIcon />
      <Navbar />
      <div className="container navbar-content">
        <div className="container-fluid">
          <h1 className="text-start">{article.title}</h1>
        </div>
        <div className="row mb-3">
          <div className="col-8">
            <div className="d-block container-fluid text-start">
              {article.image && <img src={`http://localhost:3001${article.image}`} alt={article.title} className="img-fluid mb-3" />}
              <p>{article.content}</p>
            </div>
            <div className="d-block container my-1"></div>
          </div>
          <div className="col-4">
            <div className="container-fluid">
              <img src={banner} alt="banner" className="img-fluid" />
              <h2 className="mt-4 text-center">Artikel Terkait</h2>
              {relatedArticles.slice(0, 2).map((relatedArticle) => (
                <div key={relatedArticle.id} className="my-3">
                  <img src={`http://localhost:3001${relatedArticle.image}`} alt={relatedArticle.title} className="img-fluid" />
                  <h3>{relatedArticle.title}</h3>
                  <Link className="m-0 text-decoration-none" to={`/artikel/${relatedArticle.id}`}>
                    Baca Selengkapnya
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-medblue py-5">
        <div className="container justify-content-between">
          <div className="row">
            <div className="col text-start">
              <h2 style={{ color: "white" }}>Teman Ngobrolmu</h2>
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
            <p className="text-start">
              © Copyright 2024 at Teman Ngobrolmu, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailArtikel;
