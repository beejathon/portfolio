import React from 'react';
import profile from '../assets/profile.jpeg';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

export const Header = () => {
  return (
    <header>
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
      <div className="about">
        <Fade left cascade duration={2000} delay={1500}>
          <h2 className="heading">
            About me
          </h2>
        </Fade>
        <Fade right cascade duration={2000} delay={2000}>
          <section>
            <p>
              The journey to becoming a self-taught web developer has been as difficult as it has been fulfilling. With my humanities degree and six years as an educator, the transition to the world of programming felt contradictory at first. But as I spent more time building and learning new technology, the more I found these two aspects of my intellectual and creative life complementing each other.
            </p>
            <p>
              As a former Math and English teacher, I bring a sensitvity to language, logic and structure that has not only helped me to read and write code but also to communicate abstract or technical concepts to non-technical audiences. I've also found the iterative improvements in the software development life cycle to be a familiar approach, not dissimilar to continuous updates to curriculum or lesson material.
            </p>
            <p>
              My focus so far has been front-end development in React. Currently, I have started exploring Node.js and Express with the goal of building with the MERN stack. That said, I am constantly learning and improving and am fully willing and able to dive head first into any tech-stack. 
            </p>
            <p>
              Before moving to Glasgow I lived in Hanoi, Vietnam and am originally from the Bay Area, California. Having lived and worked in different places I feel I can integrate and adapt to a variety of workplaces and company cultures. I'm also a husband and new father and am excited to build a life here in the UK with my family.
            </p>
          </section>
        </Fade>
        <Fade bottom duration={2000} delay={1000}>
          <div className="about-links">
            <a href="https://github.com/beejathon" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/bee-jay-paiz-aa20253a/" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" />
            </a>
          </div>
        </Fade>
      </div>
    </header>
  )
}