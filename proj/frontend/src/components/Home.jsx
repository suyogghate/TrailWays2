import React from 'react'
import { Navbar } from './Navbar'
// import { CarouselFade } from './Carousel'

import "./Home.css";
import CarouselFade from './Carousel';
export const Home = () => {
  return (
    <>
        <Navbar></Navbar>
        {/* <Carousel></Carousel> */}
        <CarouselFade />
    </>
  )
}
