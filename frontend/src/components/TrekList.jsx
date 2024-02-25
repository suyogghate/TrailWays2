import React from "react";
import { Navbar } from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "./Card";

export const TrekList = ({card}) => {
  // const {id, imageUrl, title, description} = card;
  
  return (
    <>
      <Navbar></Navbar>
      <h2
        className="section-title-embellishment-star text-center"
        style={{ color: "#333333", margin: "20px" }}>
       Our Treks
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