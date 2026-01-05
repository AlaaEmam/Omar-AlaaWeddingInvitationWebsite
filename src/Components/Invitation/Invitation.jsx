import React from 'react';
import './Invitation.css';
import Background from '../../assets/background11.svg';

// import Background from '../../assets/invitationbg.png';
import line from '../../assets/line.svg';

export default function Invitation() {
  return (
    <div className="container">
      <div className="background-container">
        <div className="background-image-container">
            <img src={Background} alt="Background"  />
        </div>
     <div className="centered-text">
          <div className="top">
            <div className="arabic-text">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</div>
            <div className="verse-text">
              وَمِنْ آَيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا
              <br />
              وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً إِنَّ فِي ذَلِكَ لَآَيَاتٍ لِقَوْمٍ  يتفَكَّرُونَ
            </div>
            <div className="love-note">With much love and excitement,</div>
            <div className="wedding-invite">we invite you to celebrate our wedding.</div>
            <div className="names">Omar & Alaa</div>
            <div className="line-image">
              <img src={line} alt="" />
            </div>
          </div>
          <div className="date-text" style={{fontWeight: 'bold' , letterSpacing: '0.2rem'}}> 28th of January 2026</div>
          <div className="save-the-date">SAVE THE DATE</div>
          <div className="venue">ORO PLAZA HOTEL | First Settlement</div>
        </div>
      </div>
    </div>
  );
}