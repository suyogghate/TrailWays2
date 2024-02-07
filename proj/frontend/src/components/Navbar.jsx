import React from "react";
import "./Navbar.css";
import Trailways_Logo from "../images/Trailways_Logo.png";

export const Navbar = () => {
  return (
    <>
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
    </>
  );
};
