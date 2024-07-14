// import React from 'react'
// import "../../styles/home.css"

// function Homepage() {
//   return (
     
//         <div className="content">
//             <h1>Cl<span>ubs & Spo</span>rts<br/>H<span>ub</span></h1>
//             <p className="par">Lorem ipsum dolor sit amet, <br/>the quick brown fox jumped over the lazy dogvx im loving this exerciserv6<br/>wooow its time to party </p>
//            <button className="cn"><a href="signup.html">JOIN US</a></button>
//              <div className="form">
//                 <h2>Login Here</h2>
//                   <input type="email" className='i' name='email' placeholder='enter email' />
//                   <input type="password" className='i' name='' placeholder='enter password' />
//                 <button className="btn"><a href="#">Login</a></button>
//              </div>
//         </div>
        
//   )
// }

// export default Homepage;


// src/Content.js

import React from 'react';
import "../../styles/home.css"
const Homepage = () => {
  return (
    <div className="content">
      <div className="par">
        <h1>Welcome to Clubnexa</h1>
        <p>Your ultimate club experience</p>
        <button className="cn"><a href="#join">Join Now</a></button>
        <span>Discover More</span>
      </div>
      <div className="form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn"><a href="#submit">Submit</a></button>
      </div>
      <div className="mainclubs">
        <div className="container">
          <div className="row">
            <div className="club">
              <i className="icon"></i>
              <h2>Club Name</h2>
            </div>
            {/* Add more clubs as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
