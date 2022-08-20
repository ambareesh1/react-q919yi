import React from 'react';

const About = (props) => {
  return (
    <section className="about-custom" id="about-1">
      <div className="services-banner-custom">
        <h2 className="heading-title services-header-custom">Services</h2>
      </div>
      <div className="row about-custom-item">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills nav-list-bg-custom"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              {' '}
              <i className="fa-solid fa-circle-info service-list-icon-custom"></i>{' '}
              Info
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-renewable"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              <i className="fa-solid fa-solar-panel service-list-icon-custom"></i>{' '}
              Renewable Energy
            </a>
            <a
              className="nav-link"
              id="v-pills-civil-tab"
              data-toggle="pill"
              href="#v-pills-civil"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              {' '}
              <i className="fa-solid fa-square-poll-horizontal service-list-icon-custom"></i>
              Civil
            </a>
            <a
              className="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <i className="fa-solid fa-lightbulb service-list-icon-custom"></i>
              Electrical
            </a>

            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              {' '}
              <i className="fa-solid fa-toolbox service-list-icon-custom"></i>
              Mechanical
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              {' '}
              <i className="fa-solid fa-fire-extinguisher service-list-icon-custom"></i>{' '}
              Fire Fighting
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              {' '}
              <i className="fa-solid fa-helmet-safety service-list-icon-custom"></i>{' '}
              ELV
            </a>

            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              {' '}
              <i className="fa-solid fa-road-bridge service-list-icon-custom"></i>
              BIM
            </a>
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="row">
                <div className="d-flex">
                  <div className="col-8">
                    <p className="text-justify">
                      Shri Sathi Projects Consultants was established in 2018 as
                      Electrical consultants by a team of enthusiastic and
                      experienced engineers and grown into a complete MEP (
                      Mechanical, Electrical & Plumbing ) Consultancy
                      Organization with special focus on Energy Conservation,
                      Green Business, Automation Systems and Water conservation,
                      Harvesting / Treatment Studies. Shri Sathi Projects is
                      awarded with ISO 9001: 2008 for its procedural manner in
                      maintaining the data and the standardized way of doing
                      projects, by maintaining checklists at each and every
                      stage of the project We are thoroughly conversant with the
                      latest national and international codes, practices and
                      also the latest Technical developments. We carry out the
                      design engineering as per Indian Standard Specifications,
                      Indian Electricity Rules, National Electrical Code and
                      local Electricity Board regulations for Indian projects
                      and ASHRAE, NEC, NFPA, ANSI, ASTM, IEEE, NEMA, IBC, IPC,
                      IMC, TAC etc for international projects.
                    </p>
                  </div>
                  <div className="col-4">
                    <div className="card custom-about-card-width">
                      <img
                        src="https://thumbs.dreamstime.com/z/electricians-work-wiring-lighting-flat-vector-illustration-isolated-working-indoors-white-background-electrical-221226713.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <p>
                Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua
                anim Lorem sint. Veniam sint duis incididunt do esse magna
                mollit excepteur laborum qui. Id id reprehenderit sit est eu
                aliqua occaecat quis et velit excepteur laborum mollit dolore
                eiusmod. Ipsum dolor in occaecat commodo et voluptate minim
                reprehenderit mollit pariatur. Deserunt non laborum enim et
                cillum eu deserunt excepteur ea incididunt minim occaecat.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <p>
                Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua
                anim Lorem sint. Veniam sint duis incididunt do esse magna
                mollit excepteur laborum qui. Id id reprehenderit sit est eu
                aliqua occaecat quis et velit excepteur laborum mollit dolore
                eiusmod. Ipsum dolor in occaecat commodo et voluptate minim
                reprehenderit mollit pariatur. Deserunt non laborum enim et
                cillum eu deserunt excepteur ea incididunt minim occaecat.{' '}
              </p>
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-renewable"
              role="tabpanel"
              aria-labelledby="v-pills-renewable"
            >
              <ul className="nav nav-tabs nav-justified">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#home"
                  >
                    Solar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#menu1">
                    Hydro
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#menu2">
                    Wind
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#menu3">
                    Tidel Power Plants
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane container active" id="home">
                  <div className="row mt-2">
                    <div className="d-flex">
                      <div className="col-lg-5">
                        <div className="card shadow-custom custom-about-card-width">
                          <img
                            className="card-img-top"
                            src="assets/images/clients/solor.jpeg"
                            alt="Card image cap"
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              25mw floated solar power plant in vizag
                            </h5>
                            <p className="card-text">
                              We provided the best in delivering the product
                              with quality. The solar panels are fixed in
                              stipulated time & the technicians & labours
                              provided better quality of work.{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <p className="card-text text-justify">
                          Shri Sathi Projects has carried out a few MW range
                          solar PV projects and has been monitoring the
                          performance for quite some time. Shri Sathi Projects
                          office is the best example with Net metering and
                          nearly above 60 to 70% of daily consumption for the
                          last two years.
                        </p>
                        <p className="card-text text-justify">
                          Shri Sathi Projects can conduct pre installation study
                          i.e solar insolation, designing of PV system and
                          extend complete support in execution and commissioning
                          of the system
                        </p>
                        <img
                          src="assets/images/clients/solor_panel.PNG"
                          className="custom-about-card-width"
                          alt="solor panels"
                        />
                        <img
                          src="assets/images/clients/solor_man.PNG"
                          className="custom-img-width"
                          alt="solor panels"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane container fade" id="menu1">
                  ...
                </div>
                <div className="tab-pane container fade" id="menu2">
                  ...
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-civil"
              role="tabpanel"
              aria-labelledby="v-pills-civil-tab"
            >
              <h4>General Supply & execution works</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
