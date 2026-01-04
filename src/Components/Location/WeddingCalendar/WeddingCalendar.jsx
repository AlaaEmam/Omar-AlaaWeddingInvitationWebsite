import React from 'react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import calIcon from '../../../assets/calender.svg'; 

const WeddingCalendar = () => {
  return (
    <div style={styles.wrapper}>
      {/* This is your hand-drawn icon */}
      <img 
        src={calIcon} 
        alt="Add to Calendar" 
        style={styles.image} 
      />

      <div style={styles.overlay}>
        <AddToCalendarButton
          name="Omar & Alaa Wedding Day ! 🥂"
          options={['Google']}
          location="The Grand Venue, 123 Wedding Lane, City, State"
          startDate="2026-01-28"
          startTime="00:00"
          endTime="23:30"
          description="We are so excited to celebrate with you! Please arrive 15 minutes early for the ceremony."
          timeZone="currentBrowser"
          label="Add to Calendar"
          hideText
          buttonStyle="flat"
          lightMode="light"
          size="10" 
        />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'transform 0.2s ease', 
  },
  image: {
    width: '60px', 
    height: 'auto',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0, 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default WeddingCalendar;