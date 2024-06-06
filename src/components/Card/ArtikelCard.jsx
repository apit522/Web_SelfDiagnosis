import React from 'react'

function InfoCard ({ image, title, text, link }) {
  return (
    <div
      className='card mb-3 shadow rounded-3 border-0'
      style={{
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        height: 'auto'
      }}
    >
      <div className='card-body d-flex align-items-center'>
        <div className='me-3'>
          <img
            src={image}
            alt={title}
            className='img-fluid'
            style={{ width: '350px', height: 'auto' }}
          />
        </div>
        <div className='text-start'>
          <h5 className='card-title m-0'>{title}</h5>
          <p className='m-0'>{text}</p>
          <a className='m-0 text-decoration-none' href={title}>
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
