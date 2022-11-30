import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
const Footer = () => {
  return (
    <footer id="footer" className="footer-area">
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-logo-support d-md-flex align-items-end justify-content-between">
                <div className="footer-logo d-flex align-items-end">
                  <NavLink className="mt-30" to="/">
                    <img src={Logo} alt="Logo" />
                  </NavLink>
                  <ul className="social mt-30">
                    <li>
                      <NavLink to="/">
                        <i className="lni-facebook-filled"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <i className="lni-twitter-original"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <i className="lni-instagram-original"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <i className="lni-linkedin-original"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer-link">
                <h6 className="footer-title">Company</h6>
                <ul>
                  <li>
                    <NavLink href="#">About</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Career</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="footer-link">
                <h6 className="footer-title">Product & Services</h6>
                <ul>
                  <li>
                    <NavLink href="#">Products</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Business</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Developer</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <div className="footer-link">
                <h6 className="footer-title">Help & Suuport</h6>
                <ul>
                  <li>
                    <NavLink href="#">Support Center</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">FAQ</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Terms & Conditions</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer-newsletter">
                <h6 className="footer-title">Subscribe Newsletter</h6>
                <div className="newsletter">
                  <form action="#">
                    <input type="text" placeholder="Your Email" />
                    <button type="submit">
                      <i className="lni-angle-double-right"></i>
                    </button>
                  </form>
                </div>
                <p className="text">
                  Subscribe weekly newsletter to stay upto date. We don’t send
                  spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright text-center">
                <p className="text">
                  Template Crafted by{" "}
                  <NavLink rel="nofollow" href="../../index.htm">
                    UIdeck
                  </NavLink>{" "}
                  - UI Powered by{" "}
                  <a el="nofollow" href="../../index-1.htm">
                    AyroUI
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavLink className="back-to-top">
        <i className="lni-chevron-up"></i>
      </NavLink>
    </footer>
  );
};

export default Footer;
