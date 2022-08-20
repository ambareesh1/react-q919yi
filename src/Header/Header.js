import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const navBarData = props.items;

  return (
    <header
      className="header header-light header-topbar header-topbar1 header-shadow"
      id="navbar-spy"
    >
      <div className="top-bar">
        <div className="block-left">
          <div className="top-contact">
            <div className="contact-infos">
              <i className="fa-solid fa-phone"></i>
              <div className="contact-body">
                <p>
                  phone: <a href="tel:919398277980">+91 9398277980</a> &nbsp;
                  &nbsp; | &nbsp; &nbsp;{' '}
                  <a href="tel:918125377980">+91 8125377980</a>
                </p>
              </div>
            </div>

            <div className="contact-infos">
              <i className="fa-solid fa-envelope"></i>
              <div className="contact-body">
                <p>
                  email:{' '}
                  <a href="mailto:shrisathip@gmail.com">
                    shrisathip@gmail.com{' '}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-sticky" id="primary-menu">
        <a className="navbar-brand" href="index.html">
          <img
            className="logo logo-dark"
            src="https://i.ibb.co/55yrdGk/satiprojects-logo.jpg"
            alt="Energia Logo"
          />
          <img
            className="logo logo-mobile logo-custom"
            src="assets/images/logo/satilogo.jpeg"
            alt="Energia Logo"
          />
        </a>
        <div className="module-holder module-holder-phone">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto">
            {navBarData.map((item) => (
              <li className="nav-item  active" data-hover="">
                <NavLink to={item.link}>
                  <span className="nav-span-icon-custom">{item.name}</span>
                  <span className="custom-divider"> | </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="module-holder">
            <div className="block-right">
              <img
                src="./assets/images/about/makeinindia.png"
                className="custom-img-heght"
              />
            </div>
            <div className="block-right">
              <img
                src="./assets/images/about/msme.png"
                className="custom-img-heght"
              />
            </div>
            <div className="module-contact">
              <a
                className="btn btn--primary"
                data-toggle="modal"
                data-target="#postQuote"
              >
                request a quote
                <i className="fa-solid fa-circle-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
