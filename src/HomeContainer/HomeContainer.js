import React, { useState } from 'react';
import './HomeContainer.css';
const HomeContainer = () => {
  return (
    <div class="row bg-white">
      <div className="parallax"> </div>
      <div className="container">
        <div class="row shadow p-3 m-3 bg-body rounded">
          <div className="col-lg-12">
            <div>
              <h3 class="header-text">
                <span className="our-color">Our</span> Journey
              </h3>
              <p class="header-text-description text-break">
                Shri Sathi Projects was established in 2017 as Electrical
                consultants by a team of enthusiastic and experienced engineers
                and grown into a complete MEP ( Mechanical, Electrical &
                Plumbing ) Consultancy Organization with special focus on Energy
                Conservation, Green Business, Automation Systems and Water
                conservation, Harvesting / Treatment Studies. Synergy infra is
                awarded with ISO 9001: 2008 for its procedural manner in
                maintaining the data and the standardized way of doing projects,
                by maintaining checklists at each and every stage of the project
                We are thoroughly conversant with the latest national and
                international codes, practices and also the latest Technical
                developments.
              </p>
              <p class="header-text-description text-break">
                We carry out the design engineering as per Indian Standard
                Specifications, Indian Electricity Rules, National Electrical
                Code and local Electricity Board regulations for Indian projects
                and ASHRAE, NEC, NFPA, ANSI, ASTM, IEEE, NEMA, IBC, IPC, IMC,
                TAC etc for international projects.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-service"> </div>
      <div className="container">
        <h1 className="services-header-custom"> Services </h1>
        <div class="row shadow p-3 m-3 bg-body rounded">
          <div class="d-flex align-items-start">
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                class="nav-link active text-start btn-width"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Info
              </button>
              <button
                class="nav-link text-start btn-width"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Electrical
              </button>
              <button
                class="nav-link text-start btn-width"
                id="v-pills-disabled-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-disabled"
                type="button"
                role="tab"
                data-bs-target="#v-pills-messages"
                aria-selected="false"
              >
                Civil
              </button>
              <button
                class="nav-link text-start btn-width"
                id="v-pills-plumbing-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-plumbing"
                type="button"
                role="tab"
                aria-controls="v-pills-plumbing"
                aria-selected="false"
              >
                Plumbing
              </button>
              <button
                class="nav-link text-start btn-width"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Mechanical
              </button>
              <button
                class="nav-link text-start btn-width"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Fire Fighting
              </button>
              <button
                class="nav-link text-start btn-width"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                ELV
              </button>
              <button
                class="nav-link text-start btn-width"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Solar
              </button>
            </div>
            <div class="tab-content ms-3" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
                tabindex="0"
              >
                <div class="row">
                  <div class="d-flex">
                    <div class="col-8">
                      <p class="text-justify text-break">
                        Shri Sathi Projects Consultants was established in 2018
                        as Electrical consultants by a team of enthusiastic and
                        experienced engineers and grown into a complete MEP (
                        Mechanical, Electrical &amp; Plumbing ) Consultancy
                        Organization with special focus on Energy Conservation,
                        Green Business, Automation Systems and Water
                        conservation, Harvesting / Treatment Studies. Shri Sathi
                        Projects is awarded with ISO 9001: 2008 for its
                        procedural manner in maintaining the data and the
                        standardized way of doing projects, by maintaining
                        checklists at each and every stage of the project We are
                        thoroughly conversant with the latest national and
                        international codes, practices and also the latest
                        Technical developments. We carry out the design
                        engineering as per Indian Standard Specifications,
                        Indian Electricity Rules, National Electrical Code and
                        local Electricity Board regulations for Indian projects
                        and ASHRAE, NEC, NFPA, ANSI, ASTM, IEEE, NEMA, IBC, IPC,
                        IMC, TAC etc for international projects.
                      </p>
                    </div>
                    <div class="col-4">
                      <div class="card card-width">
                        <img
                          src="https://i.ibb.co/HqkJ7kf/My-project.png"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body card-footer-bg">
                          <p class="card-text ">
                            We gave our 100% best efforts to make the client
                            satisfied with our services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
                tabindex="0"
              >
                <div className="row">
                  <div className="col-8">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item ">
                        Installing, maintaining, and repairing electrical
                        control, wiring, and lighting systems.
                      </li>
                      <li class="list-group-item">
                        Reading technical diagrams and blueprints.
                      </li>
                      <li class="list-group-item">
                        Performing general electrical maintenance.
                      </li>
                      <li class="list-group-item">
                        Inspecting transformers, circuit breakers, and other
                        electrical components.
                      </li>
                      <li class="list-group-item">
                        Troubleshooting electrical issues using appropriate
                        testing devices.
                      </li>
                      <li class="list-group-item">
                        Repairing and replacing equipment, electrical wiring,
                        and fixtures.
                      </li>
                      <li class="list-group-item">
                        Following National Electrical Code state and local
                        building regulations.
                      </li>
                      <li class="list-group-item">
                        Performing circuit breaker corrective maintenance.
                      </li>
                      <li class="list-group-item">
                        Maintaining good knowledge of heating and air
                        conditioning systems as well as various testing
                        equipment.
                      </li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <div class="card card-width">
                      <img
                        src="https://i.ibb.co/jL9K97Z/image.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body card-footer-bg">
                        <p class="card-text ">
                          We gave our 100% best efforts to make the client
                          satisfied with our services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
                tabindex="0"
              >
                <div className="row">
                  <div className="col-8">
                    <p>
                      Civil construction falls in the category of civil
                      engineering which is all about designing, constructing and
                      maintaining the physical and naturally built environment.
                      Civil construction is the art of building bridges, dams,
                      roads, airports, canals, and buildings.
                    </p>
                    <p className="mt-2">
                      In today’s society, there are huge projects meant for
                      civil construction and engineering. The infrastructure
                      used in our daily lives all has been created because of
                      civil construction and engineering. The roads, railways,
                      stadiums, harbors, schools and other buildings constructed
                      all are a contribution of civil engineering.
                    </p>
                  </div>
                  <div className="col-4">
                    <div class="card card-width">
                      <img
                        src="https://www.approvedcourse.com/wp-content/uploads/2021/07/Civil-Engineer.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body card-footer-bg">
                        <p class="card-text ">
                          We gave our 100% best efforts to make the client
                          satisfied with our services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-plumbing"
                role="tabpanel"
                aria-labelledby="v-pills-plumbing-tab"
                tabindex="0"
              >
                <div className="row">
                  <div className="col-8">
                    <p>
                      Plumbers install and repair pipes and fixtures that carry
                      water, gas, or other fluids in homes and businesses. They
                      also maintain plumbing fixtures like bathtubs and toilets
                      and appliances such as dishwashers or heating systems.
                    </p>
                    <p className="mt-2">
                      A successful Plumber needs to have experience working with
                      various fixtures involved in their field. They should be
                      able to identify issues within a system and solve them.
                      It's also essential for them to have good communication
                      skills to convey any problems.
                    </p>
                    <p>
                      Plumbers collaborate with professionals like Electricians
                      who install electrical fixtures. These individuals work in
                      tandem to ensure their work is adequate to operate
                      alongside the other's, keeping in mind the importance of
                      safety when the two systems work simultaneously.{' '}
                    </p>
                  </div>
                  <div className="col-4">
                    <div class="card card-width">
                      <img
                        src="https://www.approvedcourse.com/wp-content/uploads/2021/07/Civil-Engineer.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body card-footer-bg">
                        <p class="card-text ">
                          We gave our 100% best efforts to make the client
                          satisfied with our services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
                tabindex="0"
              >
                <div className="row">
                  <div className="col-8">
                    <p>
                      Civil construction falls in the category of civil
                      engineering which is all about designing, constructing and
                      maintaining the physical and naturally built environment.
                      Civil construction is the art of building bridges, dams,
                      roads, airports, canals, and buildings.
                    </p>
                    <p className="mt-2">
                      In today’s society, there are huge projects meant for
                      civil construction and engineering. The infrastructure
                      used in our daily lives all has been created because of
                      civil construction and engineering. The roads, railways,
                      stadiums, harbors, schools and other buildings constructed
                      all are a contribution of civil engineering.
                    </p>
                  </div>
                  <div className="col-4">
                    <div class="card card-width">
                      <img
                        src="https://www.approvedcourse.com/wp-content/uploads/2021/07/Civil-Engineer.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body card-footer-bg">
                        <p class="card-text ">
                          We gave our 100% best efforts to make the client
                          satisfied with our services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-project"> </div>
      <div className="container">
        <h1 className="services-header-custom"> Projects </h1>
        <div class="row p-3 project-bg">
          <div class="d-flex project-bg">
            <div class="col-lg-3">
              <div class="card">
                <img
                  class="card-img-top project-card-height"
                  src="https://i.ibb.co/GpGt5TD/p1.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    25mw floated solar power plant in vizag
                  </h5>
                  <p class="card-text">
                    We provided the best in delivering the product with quality.
                    The solar panels are fixed in stipulated time &amp; the
                    technicians &amp; labours provided better quality of work.{' '}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="card">
                <img
                  class="card-img-top project-card-height"
                  src="https://i.ibb.co/pR4YQ9V/p9.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    AIIMS nagpur, mangalagiri &amp; kalyani technical execution
                  </h5>
                  <p class="card-text">
                    We provided the best in delivering the product with quality.
                    The solar panels are fixed in stipulated time &amp; the
                    technicians &amp; labours provided better quality of work.{' '}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="card">
                <img
                  class="card-img-top project-card-height"
                  src="https://i.ibb.co/S3vX6Rj/p3.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Godrej &amp; KEC international river hills apartment &amp;
                    villas pune,
                  </h5>
                  <p class="card-text">
                    We provided the best in delivering the product with quality.
                    The solar panels are fixed in stipulated time &amp; the
                    technicians &amp; labours provided better quality of work.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card">
                <img
                  class="card-img-top project-card-height"
                  src="https://i.ibb.co/wBcvsMw/p4.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    33/11 kv Substations odisha &amp; Andhra government erection
                    &amp; commissioning projects
                  </h5>
                  <p class="card-text">
                    We provided the best in delivering the product with quality.
                    The solar panels are fixed in stipulated time &amp; the
                    technicians &amp; labours provided better quality of work.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
