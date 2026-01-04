import React from 'react';
import './WeddingTimeline.css';
import GateOpen from '../../assets/WeddingTimeline/gate-open.svg';
import KatbElKetat from '../../assets/WeddingTimeline/katb-el-ketat.svg';
import EveningParty from '../../assets/WeddingTimeline/evening-party.svg';
import DinnerTime from '../../assets/WeddingTimeline/dinner-time.svg';
import DabkaShow from '../../assets/WeddingTimeline/dabka-show.svg';
import GroupPhotos from '../../assets/WeddingTimeline/photo-time.svg';
import EndingParty from '../../assets/WeddingTimeline/ending-party.svg';

const events = [
  { time: '6:00 PM', title: 'Reception Starts', image: GateOpen },
  { time: '7:00 PM', title: 'Katb El Ketat', image: KatbElKetat },
  { time: '8:00 PM', title: 'Evening Party', image: EveningParty },
  { time: '9:00 PM', title: 'Dinner Time', image: DinnerTime },
  { time: '10:00 PM', title: 'Dabka Show', image: DabkaShow },
  { time: '11:30 PM', title: 'Group Photos Time', image: GroupPhotos },
  { time: '12:00 AM', title: 'Ending Party', image: EndingParty },
];

const WeddingTimeline = () => {
  return (
    <div className='WeddingTimeline'>
      <h1>
        The Wedding <br /> Details
      </h1>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className={`containerr ${index % 2 === 0 ? 'right' : 'left'}`}>
               {index % 2 === 0 ? (
            <>
             <div className="content-right">
               <div className='image-container'>
                <img src={event.image} alt={event.title} />
              </div>
              <div className='text-right'>
                <h4>{event.time}</h4>
                <p>{event.title}</p>
              </div>
             </div>
            </>
              ) : (
            <>
              <div className="content-left">
                <div className='text-left'>
                  <h4>{event.time}</h4>
                  <p>{event.title}</p>
                </div>
                <div className='image-container'>
                  <img src={event.image} alt={event.title} />
                </div>
                </div>
            </>
              )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingTimeline;