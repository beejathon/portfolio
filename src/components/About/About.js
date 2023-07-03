import React from 'react';
import { Fade } from 'react-awesome-reveal';
import "./About.css"

export const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="heading">
        About me
      </h2>
      <Fade duration={3000} delay={1000}>
        <div className="profile-links">
          <a href="https://github.com/beejathon" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='' />
          </a>
          <a href="https://www.linkedin.com/in/bee-jay-paiz-aa20253a/" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" />
          </a>
        </div>
      </Fade>
      <section>
      <Fade duration={3000} cascade damping={0.1}>
        <p>
          I am a self-taught web developer originally from the San Francisco Bay Area. In past lives I've been a Math & ESL teacher, a poet, and a forklift driver. With a background in education, creative writing and logistics, I am well placed to contribute to any team or project with a diverse, well-rounded skillset.
        </p>
        <p>
          My focus so far has been front-end React development but I am also familiar with MERN (mongoDB/Express/React/Node) and the Jamstack, having built a REST API for the blog section on this site. That said, I am constantly learning and improving and am fully willing and able to dive head first into any tech-stack. 
        </p>
        <p>
          As a former educator, I bring a sensitvity to language, logic and structure that has not only helped me to read and write code but also to communicate abstract or technical concepts to non-technical audiences. I've also found my experience with process improvement and proofreading / editing to be a valuable insight into debugging, testing and the general software development life cycle.
        </p>
        <p>
          Before moving to Glasgow I lived in Hanoi, Vietnam for six years. Having lived and worked in different places I am comfortable integrating and adapting to a variety of workplaces and company cultures. I'm also a husband and new father and am excited to build a life here in the UK with my family.
        </p>
      </Fade>
      </section>
    </div>
  )
}