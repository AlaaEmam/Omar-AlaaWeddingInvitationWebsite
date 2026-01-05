import React from 'react';
import './Location.css';
import OroPlazaImage from '../../assets/oro-plaza.svg'; 
import QRCodeImage from '../../assets/qr-code.svg';
import WeddingCalendar from './WeddingCalendar/WeddingCalendar';

export default function Location() {
  return (
    <div className="save-date-container">
      <div className='background-container-location'>

        <div className="hotel-image-container">
          <img src={OroPlazaImage} alt="ORO Plaza Hotel" className="hotel-image" />
        </div>

        <div className="card-content">
          <div className='announcement-section'>
            <h2 className="announcement">OUR <br />WEDDING IN</h2>
            <p className="hotel-name">ORO Plaza Hotel</p>
          </div>

          <div className='qr-announcement-section'>
            <div className="qr-section">
              <p className="qr-label">CLICK HERE TO GET YOUR LOCATION</p>
              <a href="https://maps.app.goo.gl/RdRiQRdxYC3ZeXYf6" target="_blank" rel="noopener noreferrer" className="qr-link">
                <img src={QRCodeImage} alt="QR Code" className="qr-image" />
              </a>
            </div>
           
          </div>
        </div>

        <div className="location-details">
         
          <p className='venue-name'>Venue: Royal Orchid </p>
          <p>
            ORO Plaza Hotel, First Settlement, along Al-Thawra Street,<br /> next to Mubarak Camp,
            after Al-Rehab Bridge 1.
          </p>
           <div className='wedding-calender'>
            <p>Click Here to Save The Date in Your Calender </p>
              <WeddingCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}