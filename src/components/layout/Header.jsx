import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { activeStyle } from "./HeaderCss";
// import "../../../public/assets"
import header_backgroundImage from "../../assets/images/header-bg.jpg";
import headerShape from "../../assets/images/header-shape.svg";
import logo from "../../assets/images/logo.svg";
const Header = () => {
  const [active, setActive] = useState();
  const handleNavigate = (id) => {
    console.log("activvvvv", id);
    setActive(id);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };
  // const header_backgroundImage = "assets/images/header-bg.jpg";

  return (
    <header className="header-area">
      <div className="navgition navgition-transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <NavLink className="navbar-brand">
                  <img src={logo} alt="Logo" />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarOne"
                >
                  <ul className="navbar-nav m-auto">
                    <li
                      className={`nav-item ${active === "home" && "active"}  `}
                    >
                      <NavLink
                        to="/"
                        onClick={() => handleNavigate("home")}
                        // style={activeStyle}
                        className="page-scroll"
                      >
                        HOME
                      </NavLink>
                    </li>
                    <li
                      className={`nav-item ${
                        active === "service" && "active"
                      }  `}
                    >
                      <NavLink
                        onClick={() => handleNavigate("service")}
                        to="/"
                        // style={activeStyle}
                        className="page-scroll"
                      >
                        SERVICES
                      </NavLink>
                    </li>
                    <li
                      className={`nav-item ${
                        active === "pricing" && "active"
                      }  `}
                    >
                      <NavLink
                        onClick={() => handleNavigate("pricing")}
                        to="/"
                        // style={activeStyle}
                        className="page-scroll"
                      >
                        PRICING
                      </NavLink>
                    </li>
                    <li
                      className={`nav-item ${
                        active === "testimonial" && "active"
                      }  `}
                    >
                      <NavLink
                        onClick={() => handleNavigate("testimonial")}
                        to="/"
                        // style={activeStyle}
                        className="page-scroll"
                      >
                        Testimonial
                      </NavLink>
                    </li>
                    <li
                      className={`nav-item ${
                        active === "contact" && "active"
                      }  `}
                    >
                      <NavLink
                        to="/"
                        onClick={() => handleNavigate("contact")}
                        // style={activeStyle}
                        className="page-scroll"
                      >
                        CONTACT
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="navbar-social d-none d-sm-flex align-items-center">
                  <span>FOLLOW US</span>
                  <ul>
                    <li>
                      <NavLink>
                        <i className="lni-facebook-filled"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i className="lni-twitter-original"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i className="lni-instagram-original"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i className="lni-linkedin-original"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div
        id="home"
        className="header-hero bg_cover"
        style={{ backgroundImage: `url(${header_backgroundImage})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="header-content text-center">
                <h3 className="header-title">
                  Handcrafted Landing Page for Startups and SaaS Businesses
                </h3>
                <p className="text">
                  A simple, customizable, and, beautiful SaaS business focused
                  landing page to make your project closer to launch!
                </p>
                <ul className="header-btn rounded-buttons">
                  <li>
                    <NavLink className="main-btn rounded-three" href="#">
                      GET IN TOUCH
                    </NavLink>
                  </li>
                  <li>
                    <a
                      className="main-btn rounded-four video-popup"
                      href="../../watch.html?v=r44RKWyfcFw"
                    >
                      WATCH THE VIDEO <i className="lni-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-shape">
          <img src={headerShape} alt="shape" />
        </div>
      </div>
    </header>
  );
};

export default Header;
