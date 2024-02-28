import React from "react";
import { Navbar } from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
// import Card from "react-bootstrap/Card";
import basecamp from "../images/basecamp.jpg";
import basecamp2 from "../images/basecamp2.jpg";
import kalbhairav from "../images/Kalbhairav.jpg";
import { Card } from "./Card";
// import { Navbar } from "./Navbar";

export const Home = ({card}) => {
  // const {id, imageUrl, title, description} = card;
  const captionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '5px', // Optional: Add border-radius for rounded corners
    color: 'white', // Set text color to white
  };
  return (
    <>
      <Navbar></Navbar>
      <div style={{ width: 1518 }}>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img width={"1546"} height={"600"} src={basecamp} alt="Image One" />
            <Carousel.Caption style={captionStyle}>
              <h1>Winter Special Himalayan Trek</h1>
              <p>Explore the best of North</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              width={"1546"}
              height={"600"}
              src="https://www.treebo.com/blog/wp-content/uploads/2018/07/Trekking-Options-in-South-India.jpg"
              alt="Image Two"
            />
            <Carousel.Caption style={captionStyle}>
              <h3>Best of Kerala Backpacking</h3>
              <p>Dive into the Bliss of South</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              width={"1546"}
              height={"600"}
              src={basecamp2}
              alt="Image One"
            />
            <Carousel.Caption style={captionStyle}>
              <h3>Winter Special Himalayan Trek</h3>
              <p>Explore the best of North</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              width={"1546"}
              height={"600"}
              src={kalbhairav}
              alt="Image One"
            />
            <Carousel.Caption style={captionStyle}>
              <h3>Winter Special Himalayan Trek</h3>
              <p>Explore the best of North</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h2
        className="section-title-embellishment-star"
        style={{ color: "#333333", margin: "50px 0 50px 500px" }}
      >
        Top Selling Weekend Experiences
        <span className="decor-line">
          <em className="star" style={{ backgroundColor: "#333333" }}>
            <i></i>
          </em>
        </span>
      </h2>
      <div style={{display: "flex", justifyContent: "around"}}>
        <Card/>
      </div>
    </>
  );
};


