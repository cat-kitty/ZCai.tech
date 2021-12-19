//This page creates the navigation bar
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  //The following function allow the navigation bar to be clicked
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //The following function allow the navigation bar to be clicked
  const handleClick = () => setClick(!click);
  //Build the menu, close the menu
  const closeMobileMenu = () => setClick(false);

  //This part resizes the navigation bar when the screen shrinks so the buttons can be toggled and resize from a pannel instead
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //Ensures that the Sign Up button does not pop up every time after a refresh
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Kitty <i className="fas fa-cat" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/*The following line is an if statement, if (?) true then the process on the left side of the colon will run, if false then the function on the right will run*/}
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/achievements"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Achievements
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/timeline"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Timeline
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}
//As seen in the function Navbar Font Awesome Icons are used including fas fa-cat, use this link to find different icons https://www.joydeepdeb.com/misc/font-awesome-5.html
export default Navbar;
