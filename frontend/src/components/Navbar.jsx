import React from 'react';
import "./Navbar.css";
import Trailways_Logo from '../images/Trailways_Logo.png';

export const Navbar = () => {
  return (
<>
<nav className="navbar navbar-expand-lg navbar-light">
          <div className="Icon">
                { <img alt="logo"className="logo" src= {Trailways_Logo}/> }
            </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse menubar d-flex justify-content-around" id="navbarNavAltMarkup">
    <div className="navbar-nav ">
      <a className="nav-item nav-link text-white m-4" href="/">Home</a>
      <a className="nav-item nav-link text-white m-4" href="/guidebook">Guide Book</a>
      <a className="nav-item nav-link text-white m-4" href="/treklist">Treks</a>
      <a className="nav-item nav-link text-white m-4" href='/price'>Pricing</a>
      <a className="nav-item nav-link text-white m-4" href="/contact">Contact Us</a>
      <a className="nav-item nav-link text-white m-4" href="/help">Help</a>
    </div>
   </div>
   <div className="collapse navbar-collapse Icon1 d-flex justify-content-around" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link text-white m-3" href="/trekkerlogin">Trekker&nbsp;</a>
      <a className="nav-item nav-link text-white m-3" href="/guidelogin">&nbsp; &nbsp;Guide&nbsp;&nbsp;</a>
      <a className="nav-item nav-link text-white m-3" href="/adminlogin">&nbsp; &nbsp;Admin&nbsp;&nbsp;</a>
      <a className="nav-item nav-link text-white m-3" href="/signup">&nbsp;Sign Up&nbsp;</a>
    </div>
  </div>
</nav>
</>
  )
}



