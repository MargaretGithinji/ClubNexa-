// import React from "react"
// import "../../styles/header.css"
//  function Header() {
     
//     return(
       
//     <div className='home' >
//            <div className="navbar">
//         <div clas="icon">
//             <h2 className="logo">Club<span>Nexa</span></h2>
//         </div>
//         <div className="menu">
//             <ul>
//                 <li><a href="#">HOME</a></li>
//                 <li><a href="#">ABOUT</a></li>
//                 <li><a href="clubs.html">CLUBS</a></li>
//                 <li><a href="#">SPORTS</a></li>
//                 <li><a href="#">SIGN UP</a></li>
//             </ul>
//         </div>
//                 </div>
//                 </div>
   
//  )
//  }
// export default Header;

// src/Header.js

import React from 'react';
 import "../../styles/header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Clubnexa</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
