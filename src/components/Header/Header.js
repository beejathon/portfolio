import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <Link to='/'>
            <span className="nav-link">home</span>
          </Link>
          <Link to='/about'>
            <span className="nav-link">about</span>
          </Link>
          <Link to='/projects'>
            <span className="nav-link">work</span>
          </Link>
          <Link to='/blog'>
            <span className="nav-link blog-link">blog</span>
          </Link>
        </nav>
      </header>
    </>
  )
}