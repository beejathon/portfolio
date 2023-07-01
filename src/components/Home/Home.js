import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import pic from '../../assets/bj-sketch.png' 
import "./Home.css"

export const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-text">
          <Slide duration={400} direction='left' cascade='true' damping={0.2}>
            <p className="supertitle">Hello, I'm</p>
            <p className="title-name">Bee-jay Paiz</p>
            <p className="subtitle">Frontend Web Developer in Glasgow</p>
          </Slide>
        </h1>
        <Fade duration={4000}>
          <img className="hero-img" src={pic} alt="" />
        </Fade>
      </div>
    </div>
  )
}