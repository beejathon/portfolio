import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <Link to='/portfolio'>
            <span className="nav-link">home</span>
          </Link>
          <Link to='/portfolio/about'>
            <span className="nav-link">about</span>
          </Link>
          <Link to='/portfolio/projects'>
            <span className="nav-link">work</span>
          </Link>
          <Link to='/portfolio/blog'>
            <span className="nav-link blog-link">blog</span>
          </Link>
        </nav>
      </header>
    </>
  )
}