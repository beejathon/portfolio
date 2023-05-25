import React from "react";
import galore from '../assets/galore.gif'
import notbadreads from '../assets/notbadreads.gif'
import shop from '../assets/shop.gif'
import waldo from '../assets/waldo.gif'
import battleship from '../assets/battleship.gif'
import todo from '../assets/todo.gif'
import linkIcon from '../assets/open_in_new.svg'

export const Projects = () => {
  return (
    <div className="projects">
      <h2 className="heading">My work</h2>
      {/* project card */}
      <div className="card">
        <img src={galore} alt="" />
        <div className="card-header">
          <h3>galore</h3>
          <div className="card-links">
            <a href="https://github.com/beejathon/galore-theme-test" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />            
            </a>
            <a href="https://galore-theme-test.myshopify.com/" target="_blank" rel="noreferrer">
              <img src={linkIcon} alt='' />
            </a>
          </div>
        </div>
        <div className="card-body">
          <p>A Shopify storefront developed for a start up company focused on circular fashion. Primarily front-end focused, translating a Figma design into HTML/SCSS and integrating Shopify's Liquid templating language.</p>
        </div>
        <div className="card-tools">
          <img width="48" height="48" src="https://img.icons8.com/color/48/shopify.png" alt="shopify"/>
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
          <p>A goodreads clone where users can search a database of books, organize a personal library, write reviews and interact with other users.</p>
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
          <p>A mock e-commerce web page for Croc shoes. Utilizes The Sneaker Database API to fetch and dynamically display products.</p>
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
            <a href="https://github.com/beejathon/notbadreads" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />            
            </a>
            <a href="https://beejathon.github.io/notbadreads/" target="_blank" rel="noreferrer">
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
            <a href="https://github.com/beejathon/notbadreads" target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />            
            </a>
            <a href="https://beejathon.github.io/notbadreads/" target="_blank" rel="noreferrer">
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