import React from "react";
import profile from '../assets/profile.jpeg';
import Flip from 'react-reveal/Flip';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="hero">
          <div className="spacer"></div>
          <img className="hero-img" src={profile} alt="" />
          <h1 className="title">
            <Flip left cascade duration={2500}>
              <p>Bee-jay Paiz</p>
            </Flip>
            <Flip left cascade duration={2500}>
              <p className="subtitle">Front End Web Developer</p>
            </Flip>
          </h1>
          <div className="spacer"></div>
        </div>
        <nav>
          <Link to='/portfolio/'>Home</Link>
          <Link to='/portfolio/projects'>My Work</Link>
          <Link to='/portfolio/blog'>Blog</Link>
        </nav>
      </header>
    </>
  )
}