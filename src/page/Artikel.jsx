import React, { useState, useEffect } from "react";
import "../assets/style/Artikel.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ChatIcon from "../components/Livechat/ChatIcon";
import banner from "../assets/img/photo_6224283476450983431_y.png";
import Anxienty from "../assets/img/_123218711_gettyimages-1265371206.png";
import polamakan from "../assets/img/pola-makan-sehat-2_6720220804141858GcNRCD 1.png";
import Card from "../components/Card/ArtikelCard";
import Module from "../module/module";

function Artikel() {
  return (
    <div className="home container-fluid p-0 ">
      <ChatIcon />
      <Navbar />
      <div className="container navbar-content">
        <div className="row ">
          <div className="col-8">
            <div className="d-block container-fluid text-start">
              <img src={Anxienty} alt="Anxienty" className="img-fluid" />
              <h1 className="mt-3">Apa Itu Anxienty Disorder </h1>
              <p>
                Anxiety disorder (gangguan kecemasan) adalah gangguan mental
                yang membuat pengidapnya selalu merasa cemas, khawatir, atau
                takut sehingga kesulitan menjalani aktivitas
                sehari-hari.........
              </p>
              <a href="" className="text-decoration-none">
                Baca Selengkapnya
              </a>
            </div>
            <div className="d-block container my-1">
              <Card
                image={polamakan}
                title="Pola Makan Sehat Untuk Menjaga Kesehatan Mental"
                text="Laporan menunjukkan bahwa hampir dua pertiga dari orang yang makan diet ....."
              />
              <Card
                image={polamakan}
                title="Pola Makan Sehat Untuk Menjaga Kesehatan Mental"
                text="Laporan menunjukkan bahwa hampir dua pertiga dari orang yang makan diet ....."
              />
            </div>
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

export default Artikel;
