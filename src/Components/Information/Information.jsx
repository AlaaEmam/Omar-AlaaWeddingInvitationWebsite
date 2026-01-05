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
              <p>On-site parking is available for 30 LE.</p>
              <p> Arrive early to ensure a smooth start to the celebration!</p>
            </section>

            <hr className="divider" />

            <section className="info-block">
              <h3>CONTACT</h3>
              <p>IF YOU NEED HELP PLEASE CONTACT</p>
              <div className="contact-placeholder">[01114435366 / 01110711400 ]</div>
            </section>

            <hr className="divider" />

            <section className="info-block">
              <h3>DRESS CODE</h3>
              <p>Come as you are! We want you to be comfortable, </p>
              <p>so feel free to wear whatever makes you feel your best.</p>
             
            </section>
          </div>

          {/* Right Section: Greeting */}
          <div className="greeting-column">
            <h1>THANK YOU FOR SHARING OUR BIG DAY WITH US!</h1>
            <h2>WE CAN'T WAIT TO CELEBRATE WITH YOU!</h2>
          </div>
    </div>
</div>
 </>
  )
}
