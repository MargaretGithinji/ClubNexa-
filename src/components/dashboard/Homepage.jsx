import React from 'react'

function Homepage() {
  return (
      <div>
           <div className="navbar">
        <div clas="icon">
            <h2 className="logo">Club<span>Nexa</span></h2>
        </div>
        <div className="menu">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="clubs.html">CLUBS</a></li>
                <li><a href="#">SPORTS</a></li>
                <li><a href="#">SIGN UP</a></li>
            </ul>
        </div>
       {/* <!---- <div className="search">
            <input className="srch" type="search" name="" placeholder="explore">
            <a href="#"><button className="btn">Search</button></a>
        </div>--> */}
        </div>
        <div className="content">
            
            <h1>Cl<span>ubs & Spo</span>rts<br/>H<span>ub</span></h1>
            <p className="par">Lorem ipsum dolor sit amet, <br/>the quick brown fox jumped over the lazy dogvx im loving this exerciserv6<br/>wooow its time to party </p>
           <button className="cn"><a href="signup.html">JOIN US</a></button>

             <div className="form">
                <h2>Login Here</h2>
                  <input type="email" className='i' name='email' placeholder='enter email' />
                  <input type="password" className='i' name='' placeholder='enter password' />
                <button className="btn"><a href="#">Login</a></button>
             </div>
        </div>
          </div>
  )
}

export default Homepage;