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

function DetailArtikel() {
  return (
    <div className="home container-fluid p-0 ">
      <ChatIcon />
      <Navbar />
      <div className="container navbar-content">
        <div className="container-fluid">
          <h1 className="text-start">Apa Itu Anxienty Disorder </h1>
        </div>
        <div className="row mb-3">
          <div className="col-8">
            <div className="d-block container-fluid text-start">
              <img src={Anxienty} alt="Anxienty" className="img-fluid mb-3" />
              <p>
                Kecemasan merupakan suatu hal yang tidak bisa dilepaskan dari
                kehidupan. Rasa cemas biasanya hilang begitu Anda bisa mengatasi
                pemicunya. Namun, bagi orang-orang dengan anxiety disorder,
                kecemasan yang mereka rasakan begitu hebat hingga membuat mereka
                kesulitan menjalani aktivitas sehari-hari.{" "}
              </p>
              <p>
                {" "}
                Apabila terus dibiarkan, gejala gangguan kecemasan bisa
                bertambah parah sehingga berdampak pada kinerja, hubungan
                sosial, dan bahkan kesehatan. Simak uraian berikut ini untuk
                mengetahui lebih lanjut seputar gangguan kecemasan.
              </p>
              <h2>Apa Itu Anxiety Disorder ( Gangguan Kecemasan ) ?</h2>
              <p>
                Anxiety disorder (gangguan kecemasan) adalah gangguan mental
                yang membuat pengidapnya selalu merasa cemas, khawatir, atau
                takut sehingga kesulitan menjalani aktivitas sehari-hari.
              </p>
              <p>
                Rasa cemas dan gangguan kecemasan adalah dua kondisi yang
                berbeda. Gangguan kecemasan membuat Anda mudah sekali khawatir
                terhadap berbagai hal, bahkan ketika sedang berada dalam situasi
                normal.
              </p>
              <p>
                Pada tingkatan yang sudah tergolong parah, anxiety disorder atau
                gangguan ansietas juga bisa mengganggu aktivitas sehari-hari
                dari orang yang mengalaminya.
              </p>
            </div>
            <div className="d-block container my-1"></div>
          </div>
          <div className="col-4">
            <div className="container-fluid">
              <img src={banner} alt="banner" className="img-fluid" />
              <h2 className="mt-4 text-center">Artikel Terkait </h2>
              <img src={polamakan} alt="banner" className="img-fluid my-3" />
              <h3>Pola Makan Sehat Untuk Menjaga Kesehatan Mental</h3>
              <a className="m-0 text-decoration-none" href="">
                Baca Selengkapnya
              </a>
              <img src={polamakan} alt="banner" className="img-fluid my-3" />
              <h3>Pola Makan Sehat Untuk Menjaga Kesehatan Mental</h3>
              <a className="m-0 text-decoration-none" href="">
                Baca Selengkapnya
              </a>
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
