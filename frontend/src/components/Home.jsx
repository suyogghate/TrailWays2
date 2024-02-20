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
  
  return (
    <>
      <Navbar></Navbar>
      <div style={{ width: 1518 }}>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img width={"1546"} height={"600"} src={basecamp} alt="Image One" />
            <Carousel.Caption>
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
            <Carousel.Caption>
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
            <Carousel.Caption>
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
            <Carousel.Caption>
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
      <div style={{display: "flex", flexDirection: "column", justifyContent: "around"}}>
        <Card/>
      </div>
    </>
  );
};

{
  /* <Card className="row" style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginLeft: "50px", marginBottom: "10px"}}>
        <Card.Img variant="top" src={kalbhairav} style={{width: "600px", marginLeft: "0px", marginBottom: "8px", padding: "0px 0px 0px 0px"}}/>
        <Card.Body>
          <Card.Title>HarishChandraGhad Trek</Card.Title>
          <Card.Text>
          Harishchandragad trek is one of the most challenging treks in the western ghats of Maharashtra. A popular trek which offers...
          </Card.Text>
          <Button variant="success"><a href="/book" style={{color: "white", textDecoration: "none"}}>Book Now</a></Button>
        </Card.Body>
      </Card> */
}
