import React from "react";
import { Link } from "react-router-dom";
import picture from '../Keshavpic.png';  // Ensure the path is correct
import cv from '../images/Keshav_Premsagar_Resume.pdf';  // Ensure the path is correct

const Nav = () => {
  return (
    <div className="nav">
      <div>
        <img className="profile-pic" src={picture} alt="Profile of Keshav Premsagar" />
      </div>
      <ul className="nav-ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li>
          <a 
            href={cv} 
            target="_blank"  // Opens the link in a new tab
            rel="noopener noreferrer"  // Ensures security when opening a new tab
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;


