// import React, { useState, useEffect } from 'react';
// import './LoadingPage.css';
// // import LeftPart from '../../assets/left-gate.svg';
// // import RightPart from '../../assets/right-gate.svg';
// import LeftPart from '../../assets/left-gate.png';
// import RightPart from '../../assets/right-gate.png';


// const LoadingPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     // 1. Start the opening animation after 5 seconds
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 5000);

//     // 2. Fully remove the component from the DOM after animation finishes (e.g., 6.5s)
//     const removeTimer = setTimeout(() => {
//       setIsVisible(false);
//     }, 6500);

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(removeTimer);
//     };
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <div className="loading-wrapper">
//       {/* Left Part */}
//       <div className={`door left-door ${isOpen ? 'slide-left' : ''}`}>
//        <img src={RightPart} alt="" />
//         <div className="gold-seal"></div>
//       </div>
      
//       {/* Right Part */}
//       <div className={`door right-door ${isOpen ? 'slide-right' : ''}`}>
//         <img src={RightPart} alt="" />
//       </div>
//     </div>
//   );
// };

// export default LoadingPage;