import React from 'react';
import data from "../images/images.json";
import { Link } from 'react-router-dom';

export const Card = ({card}) => {
  // const {id, imageUrl, title, description} = data;

  return (
    <div
        className="card-container d-flex justify-content-around"
        style={{  flexWrap:"wrap",width:"100%" }}
      >
        <div
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            marginLeft: "30px",
            // marginBottom: "8px",
            padding: "20px", 
            gap: "30px",
          }}
        >
          {data.map((image) => (
            <div
              className="col-md-4 d-flex justify-content-around"
              key={image.id}
              style={{
                boxShadow: "grey 10px 9px 18px", borderRadius:"7px",width:"450px"
              }}
            >
              <div className="card " style={{borderRadius: "5px"}}>
                <img
                  src={image.imageUrl}
                  className="card-img-top"
                  alt={image.title}
                  style={{height: "300px"}}
                />
                <div className="card-body">
                  <h5 className="card-title">{image.title}</h5>
                  <p className="card-text">{image.description}</p>
                <Link to={`/trekdetails/${image.id}`} className="btn btn-success">See More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
