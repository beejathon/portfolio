import React from "react";

export const Contact = () => {
  return (
    <div className="contact">
      <h2 className="subtitle">
        Contact me
      </h2>
      <section>
        <p className="contact-text">Please get in touch if you think our work could be mutually beneficial!</p>
        <p className="contact-info">1/2 11 Glenspean Street</p>
        <p className="contact-info">Glasgow, UK G432YZ</p>
        <p className="contact-info">+44 07919510538</p>
        <p className="contact-info">bjpaiz@gmail.com</p>
        <div className="contact-links">
            <a href="https://github.com/beejathon" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/bee-jay-paiz-aa20253a/" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" />
            </a>
          </div>
      </section>
    </div>
  )
}