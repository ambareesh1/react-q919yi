import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../Modal/Modal';
const Footer = (props) => {
  return (
    <>
      <footer className="footer footer-1">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-2">
                <div className="footer-widget widget-links">
                  <div className="footer-widget-title">
                    <h5>company</h5>
                  </div>
                  <div className="widget-content">
                    <ul>
                      <li>
                        <a href="page-about.html">About Us</a>
                      </li>
                      <li>
                        <a href="page-team.html">Meet Our Team</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">News &amp; Media</a>
                      </li>
                      <li>
                        <a href="projects-standard.html">Our Projects</a>
                      </li>
                      <li>
                        <a href="page-contact.html">contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-6 col-lg-2">
                <div className="footer-widget widget-links">
                  <div className="footer-widget-title">
                    <h5>Services</h5>
                  </div>
                  <div className="widget-content">
                    <ul>
                      <li>
                        <a href="/">Solar Panels</a>
                      </li>
                      <li>
                        <a href="/">Wind Turbines</a>
                      </li>
                      <li>
                        <a href="/">Hydropower Plants</a>
                      </li>
                      <li>
                        <a href="/">Fossil Resources</a>
                      </li>
                      <li>
                        <a href="/">Battery Materials</a>
                      </li>
                      <li>
                        <a href="/">biofuels</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-6 col-lg-5">
                <div className="footer-widget widget-links widget-icon">
                  <div className="footer-widget-title">
                    <h5>support</h5>
                  </div>
                  <div className="widget-content">
                    <ul>
                      <li>
                        <a href="/">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="/">Shipping Policy</a>
                      </li>
                      <li>
                        <a href="/">Delivery Tips</a>
                      </li>
                      <li>
                        <a href="/">Returns</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="footer-widget widget-contact">
                  <div className="widget-content">
                    <ul>
                      <li className="phone">
                        +91<a href="tel:+919398277980"> 9398277980</a>
                      </li>
                      <li className="phone">
                        +91<a href="tel:+918125377980"> 8125377980</a>
                      </li>
                      <li className="email">
                        Email:{' '}
                        <a href="mailto:shrisathip@gmail.com">
                          shrisathip@gmail.com
                        </a>
                      </li>
                      <li className="address">
                        <p>
                          #2-85-1 Ambhaburam Vijayawada Krishna Dist, AP,
                          520012.
                        </p>
                      </li>
                      <li className="directions">
                        <a href="page-contact.html">
                          <i className="energia-location-Icon"></i>get
                          directions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-copyright">
                  <div className="copyright">
                    <span>© 2022 all rights reserved.</span>
                    <ul className="list-unstyled social-icons">
                      <li>
                        <a className="share-facebook" href="javascript:void(0)">
                          <i className="energia-facebook"></i>facebook
                        </a>
                      </li>
                      <li>
                        <a className="share-twitter" href="javascript:void(0)">
                          <i className="energia-twitter"></i>twitter
                        </a>
                      </li>
                      <li>
                        <a className="share-youtube" href="javascript:void(0)">
                          <i className="energia-youtube"></i>youtube
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
