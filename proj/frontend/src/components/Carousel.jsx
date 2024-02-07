// import React from 'react';
// import "./Carousel.css";

// export const Carousel = () => {
//     return (
//       <>
//         <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
//   <div className="carousel-inner ">
//     <div className="carousel-item active">
//       <img src="https://www.tourism-of-india.com/blog/wp-content/uploads/2017/06/Treks-in-india.jpg" className="" alt="..."/>
//     </div>
//     {/* <div className="carousel-item">
//       <img src="https://www.treebo.com/blog/wp-content/uploads/2018/07/Trekking-Options-in-South-India.jpg" className="d-block" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://www.tourism-of-india.com/blog/wp-content/uploads/2017/06/Treks-in-india.jpg" className="d-block" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://www.treebo.com/blog/wp-content/uploads/2018/07/Trekking-Options-in-South-India.jpg" className="d-block" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://www.tourism-of-india.com/blog/wp-content/uploads/2017/06/Treks-in-india.jpg" className="d-block" alt="..."/>
//     </div> */}
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
// </>
//     )
// }
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;