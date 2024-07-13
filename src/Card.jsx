import chesslogo from './assets/chess logo.jpg'
import redcrosslogo from './assets/Redcross-logo.png'
import dramalogo from './assets/Dramaclub-logo.jpg'
import christianunionlogo from './assets/ChristianUnion-Logo.jpg'
import ICTclublogo from './assets/Ictclub-logo.png'
import birdwatchers from './assets/Birdwatchers-logo.jpg'
import journalismlogo from './assets/Journalism-logo.jpg'
import peaceclublogo from './assets/PeaceClub-logo.jpeg'

function Card(){
   return(
    <>
     <div className="card">
        <img className="card-image" src={chesslogo}></img>
          <h2 className="card-title">Chess</h2>
         < p className="card-text">H loves chess</p>
     </div>
     
     <div className="card">
        <img className="card-image1" src={redcrosslogo}></img>
          <h2 className="card-title">Redcross</h2>
         < p className="card-text">H loves chess</p>
     </div>
     
     <div className="card">
        <img className="card-image2" src={dramalogo}></img>
          <h2 className="card-title">Drama</h2>
         < p className="card-text">H loves chess</p>
     </div>

     <div className="card">
        <img className="card-image" src={christianunionlogo}></img>
          <h2 className="card-title">christian union</h2>
         < p className="card-text">H loves chess</p>
     </div>

     <div className="card">
        <img className="card-image3" src={ICTclublogo}></img>
          <h2 className="card-title">ICT Club</h2>
         < p className="card-text">H loves chess</p>
     </div>

     <div className="card">
        <img className="card-image4" src= {birdwatchers} alt="profile picture"></img>
          <h2 className="card-title">bird watchers club</h2>
         < p className="card-text">H loves chess</p>
     </div>
     <div className="card">
        <img className="card-image5" src={journalismlogo}></img>
          <h2 className="card-title">journalism</h2>
         < p className="card-text">H loves chess</p>
     </div>

     <div className="card">
        <img className="card-image6" src={peaceclublogo}></img>
          <h2 className="card-title">peace club </h2>
         < p className="card-text">H loves chess</p>
     </div>
     </>
   );
} 
export default Card