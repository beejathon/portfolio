import React from 'react';
import Fade from 'react-reveal/Fade';

export const About = () => {
  return (
    <div className="about">
      <Fade left cascade duration={2000} delay={1500}>
        <h2 className="heading">
          About me
        </h2>
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
      <Fade right cascade duration={2000} delay={2000}>
        <section>
          <p>
            I am a self-taught web developer with a background in education and creative writing. With a humanities degree and six years as an educator, the transition to the world of programming seemed contradictory at first but as I spent more time building and learning new technology, the more I found these two aspects of my intellectual and creative life to be complementary.
          </p>
          <p>
            As a former Math and English teacher, I bring a sensitvity to language, logic and structure that has not only helped me to read and write code but also to communicate abstract or technical concepts to non-technical audiences. I've also found my experience with process improvement and continuous updates to lesson material to be a valuable insight into the software development life cycle and version iteration.
          </p>
          <p>
            My focus so far has been front-end development in React. Currently, I have started building projects with Node.js/Express/mongoDB with the ultimate goal of MERN full-stack. That said, I am constantly learning and improving and am fully willing and able to dive head first into any tech-stack. 
          </p>
          <p>
            Before moving to Glasgow I lived in Hanoi, Vietnam and am originally from the Bay Area, California. Having lived and worked in different places I am comfortable integrating and adapting to a variety of workplaces and company cultures. I'm also a husband and new father and am excited to build a life here in the UK with my family.
          </p>
        </section>
      </Fade>
    </div>
  )
}