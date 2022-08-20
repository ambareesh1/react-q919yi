import React from 'react';

const Slider = (props) => {
  return (
    <section className="slider slider-1" id="slider-1">
      <div className="container-fluid pe-0 ps-0">
        <div className="bd-example">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://i.ibb.co/JrM5cKX/1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <div className="container">
                    <div className="row mb-custom-slider">
                      <div className="col-12 col-lg-7">
                        <div className="slide-content">
                          <h3 className="slide-headline">
                            We provide the best secure & Safe service.
                          </h3>
                          <p className="slide-desc">
                            We are accoutable for the services provided.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-3 offset-lg-2 d-flex">
                        <div className="slider-panel-holder">
                          <div className="slider-panel">
                            <i className="panel-icon flaticon-028-greenhouse"></i>
                            <h5 className="panel-title">our mission</h5>
                            <p className="panel-desc">
                              Utilizing latest processes solutions, and decades
                              of work experience.
                            </p>
                            <a href="page-about.html">
                              <i className="fa-solid fa-circle-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/Jx9V5Nq/2.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <div className="container">
                    <div className="row mb-custom-slider">
                      <div className="col-12 col-lg-7">
                        <div className="slide-content">
                          <h3 className="slide-headline">
                            energize society using sustainable &amp; reliable
                            energy
                          </h3>
                          <p className="slide-desc">
                            a world wide distrbuter of solar supplies &amp;
                            knowledgable service.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-3 offset-lg-2 d-flex">
                        <div className="slider-panel-holder">
                          <div className="slider-panel">
                            <i className="panel-icon flaticon-028-greenhouse"></i>
                            <h5 className="panel-title">our mission</h5>
                            <p className="panel-desc">
                              Utilizing latest processes solutions, and decades
                              of work experience.
                            </p>
                            <a href="page-about.html">
                              <i className="fa-solid fa-circle-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
