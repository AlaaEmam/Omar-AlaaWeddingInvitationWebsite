import React from 'react'
import './Information.css'
import Background from '../../assets/test2.png';


export default function Information() {
  return (
 <>
<div className='information'>
    <div className="invite-container">
          {/* Left Section: Information */}
          <div className="info-column">
            <section className="info-block">
              <h3>PARKING</h3>
              <p>WE HAVE 80 FREE PARKING SLOTS ON SITE</p>
              <p>COME THE EARLIEST TO GET YOUR FREE PARKING </p>
            </section>

            <hr className="divider" />

            <section className="info-block">
              <h3>CONTACT</h3>
              <p>IF YOU NEED HELP PLEASE CONTACT</p>
              <div className="contact-placeholder">[Phone Number / Email]</div>
            </section>

            <hr className="divider" />

            <section className="info-block">
              <h3>DRESS CODE</h3>
              <p><strong>BLACK TIE ATTIRE</strong></p>
              <p>(SUITS OR SMART CASUAL FOR MEN - DRESSES & SUITS FOR WOMEN)</p>
              <p>JEANS & CASUAL ATTIRE IS NOT ALLOWED</p>
              <p>PLEASE REFRAIN FROM WEARING WHITE & SHADES</p>
            </section>
          </div>

          {/* Right Section: Greeting */}
          <div className="greeting-column">
            <h1>THANK YOU FOR SHARING OUR BIG DAY WITH US!</h1>
            <h2>We can't wait to meet you!</h2>
          </div>
    </div>
</div>
 </>
  )
}
