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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint facilis sapiente sequi pariatur fugiat molestias aliquid enim. Natus voluptate unde rem esse ducimus, ex, facilis sint quia dolores veniam magni autem, reiciendis necessitatibus cumque? Numquam saepe fugiat, sint excepturi vero animi molestias mollitia, optio vel expedita provident assumenda ducimus consequatur officia molestiae maiores ea aliquid ipsa quo! Ducimus eveniet sequi quod, quas ab natus possimus nulla autem sit consequuntur dolorum commodi ex esse voluptates odit aliquam unde laborum rerum repudiandae quia repellat incidunt ratione est. Iure vero adipisci, minima ipsa dolorem doloremque? Quos impedit vero minus illum laudantium dolores enim quas nobis. Alias aut dignissimos veniam fugit, quam molestiae assumenda rem. Sequi, nam at autem dicta magni ut asperiores hic velit laborum modi incidunt harum aut maxime! Maiores officiis, fuga laborum saepe perspiciatis ut id! Accusamus iure aut esse, natus voluptatibus beatae ratione blanditiis. Laboriosam neque similique vero molestiae!
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