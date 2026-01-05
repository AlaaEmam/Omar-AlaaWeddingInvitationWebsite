import React from 'react';
import './Menu.css';
import Top from '../../assets/top-menu.svg';
import Bottom from '../../assets/bottom-menu.svg';
import LineMenu from '../../assets/menu-line.svg';

export default function Menu() {
  return (
    <div className="menu-container">
        <div className="frame-menu" >
            <img src={Top} alt="Top Menu" />
        </div>
        <div className="menu-content">
          <h1 className="menu-title">Set Menu</h1>
            <div className="line-menu-img">
                <img src={LineMenu} alt="Menu Line" />
            </div>
          <div className="menu-section">
            <h2 className="section-title">Starters & Salads</h2>
            <ul className="menu-items">
              <li>Tahini</li>
              <li>Baba Ghanoush</li>
              <li>Eastern Mixed Pickles</li>
              <li>Green Salad</li>
            </ul>
          </div>
          <div className="menu-section">
            <h2 className="section-title">Main Course</h2>
            <ul className="menu-items">
              <li>Roast Beef</li>
              <li>Grilled Chicken</li>
              <li>Grilled Kofta Skewers</li>
              <li>Waraa' Enab</li>
            </ul>
          </div>
          <div className="menu-section">
            <h2 className="section-title">Dessert</h2>
            <ul className="menu-items">
              <li>Gateaux</li>
              <li>Oriental Sweets</li>
              <li>Soft Drinks</li>
            </ul>
          </div>
        </div>
        <div className="frame-menu" >        
            <img src={Bottom} alt="Bottom Menu" />
        </div>
    </div>
  );
}