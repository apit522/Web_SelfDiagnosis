import React, { useState, useEffect } from 'react'
import HomeImage from '../img/homeimage.png'
import './home.css'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/navbar'
import InfoCard from '../component/infoCard'
import health from '../icon/mental-health 1.png'
import anxiety from '../icon/anxiety 1.png'
import bipolar from '../icon/bipolar 1.png'
import burnout from '../icon/burnout 1.png'
import frame from '../img/Frame.png'
import friends from '../img/teen-best-friends-posing-together.png'
import ChatIcon from '../livechat/ChatIcon'

function Home () {
  const headings = [
    'Butuh teman <br>Curhat? <br>',
    'Hindari self <br>diagnosis dengan <br>TN',
    'Hindari self <br>diagnosis'
  ]

  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex(prevIndex => (prevIndex + 1) % headings.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className='home home-bg container-fluid p-0'>
      <ChatIcon />
      <Navbar />
      <div className='container jumbotron d-flex align-items-center justify-content-between p-0'>
        <div className='text-start container'>
          <h1
            className='animated-heading text-white'
            dangerouslySetInnerHTML={{
              __html: '<b>' + headings[currentHeadingIndex] + '</b>'
            }}
          />
          {currentHeadingIndex == 0 && (
            <h5 className='text-white animated-strong'>
              Ceritakan pada Teman Ngobrolmu!
            </h5>
          )}
          <Link to='/chat' className='mt-3'>
            <button className='btn btn-light rounded-5'>Try on!</button>
          </Link>
        </div>
        <img
          src={HomeImage}
          alt='Home Banner'
          width={'455px'}
          className='img-fluid mt-3'
        />
      </div>
      <div className='bg-lightblue p-5 '>
        <div className='row'>
          <div className='col text-start pt-3'>
            <h1>Kenali diri Anda</h1>
            <h5>
              Kami dapat membantu dalam meringankan kondisi kesehatan mental
              anda.
            </h5>
          </div>
          <div className='col'>
            <div className='row mt-3'>
              <div className='col-md-6'>
                <InfoCard image={health} title='Self Injury' />
                <InfoCard image={anxiety} title='Anxiety Disorders' />
              </div>
              <div className='col-md-6'>
                <InfoCard image={burnout} title='Depressive Disorders' />
                <InfoCard image={bipolar} title='Bipolar Disorders' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container py-5 mb-5 text-white text-start'>
        <div className='row'>
          <h1>Artikel</h1>
          <div className='col'>
            <h2>Pola Makan Sehat Untuk Menjaga Kesehatan Mental</h2>
            <p>
              Laporan menunjukkan bahwa hampir dua pertiga dari orang yang makan
              diet .....
            </p>
            <Link to='/chat' className='mt-3'>
              <button className='btn btn-light rounded-5'>Learn More</button>
            </Link>
          </div>
          <div className='col'>
            <img src={frame} alt='' className='img-fluid' />
          </div>
        </div>
      </div>
      <div
        className='bg-lightblue p-0 position-relative'
        style={{ height: '220px' }}
      >
        <img
          src={friends}
          alt='Friends'
          width='455px'
          className='img-fluid mx-0 position-absolute'
          style={{
            top: '-75px',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '100%'
          }}
        />
      </div>
      <div className='bg-whiteblue py-5'>
        <div className='container justify-content-between'>
          <div className='row'>
            <div className='col text-start'>
              <h2 style={{ color: 'white' }}>Teman Ngobrolmu</h2>
              <h4>FAQs</h4>
              <h4>Careers</h4>
              <h4>Blog</h4>
              <h4>Media</h4>
              <h4>Service Status</h4>
              <h4>Contact Us</h4>
            </div>
            <div className='col'>
              <i className='px-3 bi bi-instagram'></i>
              <i className='px-3 bi bi-twitter-x'></i>
              <i className='px-3 bi bi-twitter'></i>
              <i className='px-3 bi bi-youtube'></i>
            </div>
            <hr />
            <p className='text-start'>
              © Copyright 2024 at Teman Ngobrolmu, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
