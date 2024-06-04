import React from 'react';

function InfoCard({ image, title }) {
  return (
    <div className='card mb-3 shadow rounded' style={{ backgroundColor: '#0074B7', color:'white', width: '100%', height: 'auto' }}>
      <div className='card-body d-flex align-items-center'>
        <div className='me-3'>
          <img src={image} alt={title} className='img-fluid' style={{ width: '50px', height: '50px' }} />
        </div>
        <div>
          <h5 className='card-title m-0'>{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
