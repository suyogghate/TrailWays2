import React from "react";
import data from "../images/images.json";
import { Link, useParams } from "react-router-dom";

export const Card = ({ card }) => {
  // const {id, imageUrl, title, description} = data;
  const { id } = useParams();

  return (
    <div
      className="card-container d-flex flex-column"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginLeft: "0px",
          // marginBottom: "8px",
          padding: "20px",
          width: "1000px",
          gap: "30px",
        }}
      >
        {data.map((image) => (
          <div
            className="col-md-4 d-flex flex-row flex-wrap"
            key={image.id}
            style={{
              boxShadow: "grey 10px 9px 18px",
              borderRadius: "7px",
            }}
          >
            <div className="card" style={{ borderRadius: "5px" }}>
              <img
                src={image.imageUrl}
                className="card-img-top"
                alt={image.title}
              />
              <div className="card-body">
                <h5 className="card-title">{image.title}</h5>
                <p className="card-text">{image.description}</p>
                {/* <Button variant="success"><a href="/trekdetails/:id" style={{color: "white", textDecoration: "none", width:"50px"}}>Book Now</a></Button> */}
                <Link to={`/booking/${id}`} className="btn btn-success">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
