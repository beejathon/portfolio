import React from "react";
import github from "../../assets/github.png"
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="contact">
      <h2 className="heading">
        Contact me
      </h2>
      <section>
        <p className="contact-text">Below you will find links to my e-mail, Github and Linkedin profiles as well as an up to date copy of my CV. Please don't hesitate to contact me if you think our work could be mutually beneficial!</p>
        <div className="contact-links">
          <a href="mailto:bjpaiz@gmail.com">
            <span className="material-icons md-48 md-dark">email</span>
          </a>
          <a href="https://github.com/beejathon" target="_blank" rel="noreferrer">
            <img height={40} src={github} alt='' />
          </a>
          <a href="https://www.linkedin.com/in/bee-jay-paiz-aa20253a/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" />
          </a>
          <a href="https://github.com/beejathon/portfolio/blob/main/bj_cv_webdev.pdf">
            <span className="material-icons md-48 md-dark">description</span>
          </a>
        </div>
      </section>
    </div>
  )
}