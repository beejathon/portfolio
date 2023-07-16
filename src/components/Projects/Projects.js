import React from "react";
import blog from '../../assets/blog.gif'
import galore from '../../assets/galore.gif'
import notbadreads from '../../assets/notbadreads.gif'
import shop from '../../assets/shop.gif'
import waldo from '../../assets/waldo.gif'
import battleship from '../../assets/battleship.gif'
import todo from '../../assets/todo.gif'
import linkIcon from '../../assets/open_in_new.svg'
import "./Projects.css"

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="heading">recent projects</h2>
      {/* project card */}
      <div className="card">
        <img src={blog} alt="" />
        <div className="card-header">
          <h3>Full-stack MERN Blog</h3>
          <div className="card-links">
            <a href="https://github.com/beejathon/blog-api" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="card-link-img" alt="" />
            </a>
            <a href="https://beejathon.github.io/portfolio/#/portfolio/blog" target="_blank" rel="noreferrer">
              <img src={linkIcon} alt='' className="card-link-img" />
            </a>
          </div>
        </div>
        <div className="card-body">
          <p>A full-stack blogging application utilizing a REST API only backend. Built with two front-ends: one client for reading and commenting and a second CMS for publishing and editing posts/comments.</p>
        </div>
        <div className="card-tools">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
        </div>
      </div>
      {/* project card */}
      <div className="card">
        <img src={galore} alt="" />
        <div className="card-header">
          <h3>galore</h3>
          <div className="card-links">
            <a href="https://github.com/galoreclub/galore-theme-test" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />            
            </a>
            <a href="https://galore.club/" target="_blank" rel="noreferrer">
              <img src={linkIcon} alt='' />
            </a>
          </div>
        </div>
        <div className="card-body">
          <p>A custom Shopify store theme for circular fashion company galore. Translated Figma design into HTML/SCSS and Shopify's Liquid templating language.</p>
        </div>
        <div className="card-tools">
          <img src="https://img.icons8.com/color/48/shopify.png" alt="shopify"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt=" "/>
        </div>
      </div>
      {/* project card */}
      <div className="card">
        <img src={notbadreads} alt="" />
        <div className="card-header">
          <h3>notbadreads</h3>
          <div className="card-links">
            <a href="https://github.com/beejathon/notbadreads" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />            
            </a>
            <a href="https://beejathon.github.io/notbadreads/" target="_blank" rel="noreferrer">
              <img src={linkIcon} alt='' />
            </a>
          </div>
        </div>
        <div className="card-body">
          <p>A goodreads clone where users can search a database of books, organize a personal library, write reviews and interact with other users. Built with React and utilizes Firebase for backend-as-a-service.</p>
        </div>
        <div className="card-tools">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="" />
        </div>
      </div>
      {/* project card */}
      <div className="card">
        <img src={waldo} alt="" />
        <div className="card-header">
          <h3>Where The Waldos At?</h3>
          <div className="card-links">
            <a href="https://github.com/beejathon/where-is-waldo" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />            
            </a>
            <a href="https://beejathon.github.io/where-is-waldo/" target="_blank" rel="noreferrer">
              <img src={linkIcon} alt='' />
            </a>
          </div>
        </div>
        <div className="card-body">
          <p>A photo-tagging app that functions as a game based on the popular series of children’s puzzle books.</p>
        </div>
        <div className="card-tools">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="" />
          </div>
      </div>
      {/* project card */}
      <div className="card">
        <img src={shop} alt="" />
        <div className="card-header">
          <h3>The Croc Pit</h3>
          <div className="card-links">
            <a href="https://github.com/beejathon/shopping-cart" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />            
            </a>
            <a href="https://beejathon.github.io/shopping-cart/" target="_blank" rel="noreferrer">
              <img src={linkIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="card-body">
          <p>A mock e-commerce store for Croc shoes. Utilizes The Sneaker Database API to fetch and dynamically display products.</p>
        </div>
        <div className="card-tools">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="" />
        </div>
      </div>
      {/* project card */}
      <div className="card">
        <img src={battleship} alt="" />
        <div className="card-header">
          <h3>Battleship</h3>
          <div className="card-links">
            <a href="https://github.com/beejathon/battleship" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />            
            </a>
            <a href="https://beejathon.github.io/battleship/" target="_blank" rel="noreferrer">
              <img src={linkIcon} alt='' />
            </a>
          </div>
        </div>
        <div className="card-body">
          <p>A web browser game based on the popular board game. Built with focus on Test-Driven-Development using Jest.</p>
        </div>
        <div className="card-tools">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt=""/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt=""/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt=""/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt=""/>
          </div>
      </div>
      {/* project card */}
      <div className="card">
        <img src={todo} alt="" />
        <div className="card-header">
          <h3>To-do List</h3>
          <div className="card-links">
            <a href="https://github.com/beejathon/todo-list" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />            
            </a>
            <a href="https://beejathon.github.io/todo-list/" target="_blank" rel="noreferrer">
              <img src={linkIcon} alt='' />
            </a>
          </div>
        </div>
        <div className="card-body">
          <p>A simple web app to create and track projects and tasks.</p>
        </div>
        <div className="card-tools">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="" />
        </div>
      </div>
    </div>
  )
}