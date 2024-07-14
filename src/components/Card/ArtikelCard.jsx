import React from 'react';
import { Link } from 'react-router-dom';

function InfoCard({ image, title, text, link, id }) {
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
          <Link to={`/artikel/${id}`} className="">
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
