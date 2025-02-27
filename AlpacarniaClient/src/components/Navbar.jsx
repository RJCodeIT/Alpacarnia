import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/alpacarnia/" className="navbar-logo" onClick={closeMobileMenu}>
            ALPACARNIA
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/alpacarnia/" className="nav-links" onClick={closeMobileMenu}>
                Strona główna
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/alpacarnia/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                O nas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/alpacarnia/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Oferta
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/alpacarnia/booking"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Zarezerwuj
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/alpacarnia/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Dołącz
              </Link>
            </li>
          </ul>
          <div className="navbar-profile">
            {currentUser ? (
              <Link to="/alpacarnia/profile" className="navbar-img-link">
                <img
                  src={currentUser.pfpicture}
                  alt="profil"
                  className="navbar-img"
                />
              </Link>
            ) : (
              <Button buttonStyle="btn-outline">DOŁĄCZ</Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
