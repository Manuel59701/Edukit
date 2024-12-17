import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className="Navbar">
      {/* Logo Section */}
      <div className="NavLogo">
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      {/* Navigation Items */}
      <div className="NavItems">
        <ul>
          {/* About Us */}
          <li className="dropdown">
            <button onClick={() => handleDropdownToggle("about-us")}>
              About Us ▼
            </button>
            {activeDropdown === "about-us" && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Our Mission</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            )}
          </li>

          {/* Donate */}
          <li className="dropdown">
            <button onClick={() => handleDropdownToggle("donate")}>
              Donate ▼
            </button>
            {activeDropdown === "donate" && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Individual Donation</a>
                </li>
                <li>
                  <a href="#">Corporate Sponsorship</a>
                </li>
                <li>
                  <a href="#">Volunteer</a>
                </li>
              </ul>
            )}
          </li>

          {/* Request */}
          <li className="dropdown">
            <button onClick={() => handleDropdownToggle("request")}>
              Request ▼
            </button>
            {activeDropdown === "request" && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Resource Request</a>
                </li>
                <li>
                  <a href="#">Collaboration</a>
                </li>
              </ul>
            )}
          </li>

          {/* Get Involved */}
          <li className="dropdown">
            <button onClick={() => handleDropdownToggle("get-involved")}>
              Get Involved ▼
            </button>
            {activeDropdown === "get-involved" && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Volunteer</a>
                </li>
                <li>
                  <a href="#">Partnership</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
              </ul>
            )}
          </li>

          {/* E-Library */}
          <div className="NavOthers">
            <li>
              <a href="#">E-Library</a>
            </li>
          </div>

          {/* Contact Us */}
          <div className="NavOthers">
            <li>
              <a href="#">Contact Us</a>
            </li>
          </div>
        </ul>
      </div>

      {/* Buttons for Sign Up and Log In */}
      <div className="NavButtons">
        <button className="log-in">Log In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
