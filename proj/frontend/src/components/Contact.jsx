import React from 'react';
import "./Navbar.css";
import Trailways_Logo from "../images/Trailways_Logo.png";
import Happy from '../images/dev/Happy.jpg';
import Suyog from '../images/dev/Suyog_Ghate.jpg';

export const Contact = () => {
  return (
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="Icon">{<img class="logo" src={Trailways_Logo} />}</div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse menubar d-flex justify-content-around"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav ">
            <a class="nav-item nav-link text-white m-4" href="/">
              Home
            </a>
            <a class="nav-item nav-link text-white m-4" href="/guidebook">
              Guide Book
            </a>
            <a class="nav-item nav-link text-white m-4" href="/treklist">
              Treks
            </a>
            <a class="nav-item nav-link text-white m-4" href="/price">
              Pricing
            </a>
            <a class="nav-item nav-link text-white m-4" href="/contact">
              Contact Us
            </a>
            <a class="nav-item nav-link text-white m-4" href="/help">
              Help
            </a>
          </div>
        </div>
        <div
          class="collapse navbar-collapse Icon1 d-flex justify-content-around"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a class="nav-item nav-link text-white m-3" href="#">
              Trekker&nbsp;
            </a>
            <a class="nav-item nav-link text-white m-3" href="#">
              &nbsp; &nbsp;Guide&nbsp;&nbsp;
            </a>
            <a class="nav-item nav-link text-white m-3" href="#">
              &nbsp;Register
            </a>
          </div>
        </div>
      </nav>
      <br/>
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-md-6">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4  ">
                  <img src={Suyog} className="img-fluid rounded-start justify-content-around align-items-center" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Suyog Ghate</h5>
                    <p className="card-text">
                        PG-DAC ,IACSD<br></br>
                        PRN : 230941220190<br></br>
                        Contact : 7030830185<br></br>
                        Email : suyoggahteminks@gmail.com
                    </p>
                    <p className="card-text"><small className="text-muted">Full Stack Developer</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4  justify-content-around align-items-center">
                  <img src={Happy} className="img-fluid rounded-start justify-content-around align-items-center" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Praveen Kumar Singh</h5>
                    <p className="card-text">
                        PG-DAC ,IACSD<br></br>
                        PRN : 230941220131<br></br>
                        Contact : 9528013522<br></br>
                        Email : praveenk012340@gmail.com
                    </p>
                    <p className="card-text"><small className="text-muted">Full Stack Developer</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
