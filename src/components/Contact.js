import React from "react";
import github from "../assets/github.png"

export const Contact = () => {
  return (
    <div className="contact">
      <h2 className="heading">
        Contact me
      </h2>
      <section>
        <p className="contact-text">Please get in touch if you think our work could be mutually beneficial!</p>
        <div className="contact-links">
          <a href="mailto:bjpaiz@gmail.com">
            <span class="material-icons md-48 md-light">email</span>
          </a>
          <a href="https://github.com/beejathon" target="_blank" rel="noreferrer">
            <img src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/bee-jay-paiz-aa20253a/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" />
          </a>
          <a href="https://github.com/beejathon/portfolio/blob/2effb2dab03493d36c611ee1412d480dc86160bc/bj_cv_webdev.pdf">
            <span class="material-icons md-48 md-light">description</span>
          </a>
        </div>
      </section>
    </div>
  )
}