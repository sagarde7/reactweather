import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
            Logo
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>More</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
