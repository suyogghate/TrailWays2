import React from 'react';
import Guide from '../images/guide.png';
import Trekker from '../images/trekker.png';
import { Navbar } from './Navbar';

export const Signup= () => {
  return (
    <>
    <Navbar></Navbar>
    <div>
    <section id="gallery">
  <div class="container">
    <br/>
    <div class="d-flex justify-content-around row ">
    <div class="col-lg-4 mb-4">
    <div class="card">
      <img src={Guide} alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Guide Sign Up</h5>
        <p class="card-text" style={{textAlign: "justify"}}>Showcase your expertise to a global audience, leading unforgettable adventures. From rugged terrains to cultural gems, turn your knowledge into a lucrative opportunity. Earn while exploring and be part of our community, transforming each guided adventure into a path of financial success and personal fulfillment!</p>
       <a href="/signup/guide" class="btn btn-outline-success btn-sm">Sigh Up</a>
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-4">
  <div class="card">
      <img src={Trekker} alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Trekker Sign Up</h5>
        <p class="card-text" style={{textAlign: "justify"}}>Embark on the adventure of a lifetime! Immerse yourself in breathtaking landscapes, conquer challenging trails, and experience the thrill of trekking with our expert guides. From majestic mountain vistas to lush forests, every step is a journey into the heart of nature. Unleash the trekker in you and explore the extraordinary!</p>
       <a href="/signup/trekker" class="btn btn-outline-success btn-sm">Sign Up</a>
      </div>
      </div>
    </div>
    
    </div>
  </div>
    </section>
    </div>
      </>
  );
};
