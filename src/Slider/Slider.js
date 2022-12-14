import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
const Slider = (props) => {
  return (
    <section className="slider slider-1 d-none d-sm-block" id="slider-1">
      <div
        id="carouselExampleControls"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item  active" data-bs-interval="10000">
            <img
              src="https://i.ibb.co/JrM5cKX/1.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="container">
                <div class="row mb-custom-slider">
                  <div class="col-12 col-lg-7">
                    <div class="slide-content">
                      <h3 class="slide-headline">
                        We provide the best secure &amp; Safe service.
                      </h3>
                      <p class="slide-desc">
                        We are accoutable for the services provided.
                      </p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-3 offset-lg-2 d-flex">
                    <div class="slider-panel-holder">
                      <div class="slider-panel">
                        <i class="panel-icon flaticon-028-greenhouse"></i>
                        <h5 class="panel-title">our mission</h5>
                        <p class="panel-desc">
                          Utilizing latest processes solutions, and decades of
                          work experience.
                        </p>
                        <Link to="/projects">
                          <i class="fa-solid fa-circle-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://i.ibb.co/Jx9V5Nq/2.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="container">
                <div class="row mb-custom-slider">
                  <div class="col-12 col-lg-7">
                    <div class="slide-content">
                      <h3 class="slide-headline">
                        We make the things simple &amp; significant
                      </h3>
                      <p class="slide-desc">
                        We are accoutable for the services provided.
                      </p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-3 offset-lg-2 d-flex">
                    <div class="slider-panel-holder">
                      <div class="slider-panel">
                        <i class="panel-icon flaticon-028-greenhouse"></i>
                        <h5 class="panel-title">our mission</h5>
                        <p class="panel-desc">
                          Utilizing latest processes solutions, and decades of
                          work experience.
                        </p>
                        <Link to="/projects">
                          <i class="fa-solid fa-circle-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://i.ibb.co/58CF5pz/p12.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <div class="container">
                <div class="row mb-custom-slider">
                  <div class="col-12 col-lg-7">
                    <div class="slide-content">
                      <h3 class="slide-headline">
                        Our workers provide the excellent service at their best.
                      </h3>
                      <p class="slide-desc">
                        We are accoutable for the services provided.
                      </p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-3 offset-lg-2 d-flex">
                    <div class="slider-panel-holder">
                      <div class="slider-panel">
                        <i class="panel-icon flaticon-028-greenhouse"></i>
                        <h5 class="panel-title">our mission</h5>
                        <p class="panel-desc">
                          Utilizing latest processes solutions, and decades of
                          work experience.
                        </p>
                        <Link to="/projects">
                          <i class="fa-solid fa-circle-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Slider;
