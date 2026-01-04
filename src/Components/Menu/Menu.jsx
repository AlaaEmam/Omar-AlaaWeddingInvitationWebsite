// import React from 'react'
// import './Menu.css'
//  import Background from '../../assets/bg-menu.svg';
//     import Top from '../../assets/top-menu.svg'
//     import Bottom from '../../assets/bottom-menu.svg';
//     import LineMenu from '../../assets/menu-line.svg';
// // import Background from '../../assets/test.png';

// export default function Menu() {
//   return (
//     <>
//         <div className="menu-container">
//           <div className="background-menu">
//             <div>
//                 <img src={Top} alt="Menu Background" className="background-image" />
//             </div>
                
//             <div className="menu-content">
//                 <h1 className="menu-title">Set Menu</h1>
//                 <img src={LineMenu} alt="" />
//                 <p className="menu-description">
//                     This menu offers a complete dining experience, including starters, a main course, dessert, and beverages.
//                 </p>
//                 <div className="menu-section">
//                     <h2 className="section-title">Starters & Salads</h2>
//                     <ul className="menu-items">
//                         <li>Tahini</li>
//                         <li>Barb Ghanoush</li>
//                         <li>Eastern Mixed Pickles</li>
//                         <li>Green Salad</li>
//                     </ul>
//                 </div>
//                 <div className="menu-section">
//                     <h2 className="section-title">Main Course</h2>
//                     <ul className="menu-items">
//                         <li>Shredded Beef Roast</li>
//                         <li>Grilled Chicken Platter</li>
//                         <li>Grilled Kofta Skewers</li>
//                         <li>Rice Leaves</li>
//                     </ul>
//                 </div>
//                 <div className="menu-section">
//                     <h2 className="section-title">Dessert</h2>
//                     <ul className="menu-items">
//                         <li>Gateau Sorbet</li>
//                         <li>Oriental Sweets</li>
//                         <li>Soft Drink</li>
//                     </ul>
//                 </div>
//             </div>
//              <div>
//                 <img src={Bottom} alt="Menu Background" className="background-image" />
//             </div>
        
//         </div>
//       </div>
//     </>
//   )
// }
import React from 'react';
import './Menu.css';
import Background from '../../assets/bg-menu.svg';
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
            <span>OUR</span>
          <h1 className="menu-title">Set Menu</h1>
          <p className="menu-description">
            This menu offers a complete dining experience, <br />including starters, a main course, dessert, and beverages.
          </p>
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
              <li>Shredded Beef Roast</li>
              <li>Grilled Chicken Platter</li>
              <li>Grilled Kofta Skewers</li>
              <li>Rice Leaves</li>
            </ul>
          </div>
          <div className="menu-section">
            <h2 className="section-title">Dessert</h2>
            <ul className="menu-items">
              <li>Gateau Sorbet</li>
              <li>Oriental Sweets</li>
              <li>Soft Drink</li>
            </ul>
          </div>
        </div>
        <div className="frame-menu" >        
            <img src={Bottom} alt="Bottom Menu" />
        </div>
    </div>
  );
}