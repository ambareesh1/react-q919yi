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
                id="v-pills-mechanical-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-mechanical"
                type="button"
                role="tab"
                aria-controls="v-pills-mechanical"
                aria-selected="false"
              >
                Mechanical
              </button>
              <button
                class="nav-link text-start btn-width"
                id="v-pills-solar-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-solar"
                type="button"
                role="tab"
                aria-controls="v-pills-solar"
                aria-selected="false"
              >
                Solar
              </button>
              <button
                class="nav-link text-start btn-width"
                id="v-pills-fire-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-fire"
                type="button"
                role="tab"
                aria-controls="v-pills-fire"
                aria-selected="false"
              >
                Fire Fighting
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
                    <p className="mt-2">
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
                        src="https://img.freepik.com/free-vector/frustrated-female-person-team-plumbers-bathroom-maintenance-workers-helping-woman-with-plumbing-flat-vector-illustration-repair-service-concept-banner-website-design-landing-page_74855-24141.jpg?w=996&t=st=1664033288~exp=1664033888~hmac=d2e28b4e3c3eb21b6537779540fed0113d5449751df75b53991021db3a57707f"
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
                id="v-pills-mechanical"
                role="tabpanel"
                aria-labelledby="v-pills-mechanical-tab"
                tabindex="0"
              >
                <div className="row">
                  <div className="col-8">
                    <p>
                      Mechanical Engineers design and develop new devices while
                      also improving existing ones. They analyze the mechanical
                      aspects of these products, focusing on heat transfer
                      properties or durability. Through this, they come up with
                      solutions that will meet industry standards while still
                      being cost-effective enough to be produced at scale
                      without affecting their price point too drastically.
                    </p>
                    <p className="mt-2">
                      Mechanical Engineers are responsible for analyzing
                      mechanical and thermal devices to find solutions for
                      repairs or innovations which will help solve even more
                      complex challenges. They often handle developing
                      prototypes suitable enough to be tested by customers until
                      production begins.
                    </p>
                  </div>
                  <div className="col-4">
                    <div class="card card-width">
                      <img
                        src="https://img.collegedekhocdn.com/media/img/careers/mechanical-eng111.jpg"
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
                id="v-pills-solar"
                role="tabpanel"
                aria-labelledby="v-pills-solar-tab"
                tabindex="0"
              >
                <div className="row">
                  <div className="col-8">
                    <p>
                      As a solar panel installer, you will be responsible for
                      installing and servicing solar panels on buildings and
                      land to ensure they efficiently convert solar power into
                      renewable energy. Most of your work as a solar panel
                      installer will be outdoors and at height.
                    </p>
                    <p className="mt-2">
                      Solar power works by converting energy from the sun into
                      power. There are two forms of energy generated from the
                      sun for our use – electricity and heat. Both are generated
                      through the use of solar panels, which range in size from
                      residential rooftops to 'solar farms' stretching over
                      acres of rural land.
                    </p>
                  </div>
                  <div className="col-4">
                    <div class="card card-width">
                      <img
                        src="https://previews.123rf.com/images/stmool/stmool1610/stmool161000008/68016981-flat-design-vector-illustration-electricity-graphic-elements.jpg?fj=1"
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
                id="v-pills-fire"
                role="tabpanel"
                aria-labelledby="v-pills-fire-tab"
                tabindex="0"
              >
                <div className="row">
                  <div className="col-8">
                    <p>
                      A firefighter is a first responder and rescuer extensively
                      trained in firefighting, primarily to extinguish hazardous
                      fires that threaten life, property, and the environment as
                      well as to rescue people and in some cases or
                      jurisdictions also animals from dangerous situations.
                    </p>
                    <p className="mt-2">
                      A Firefighter is responsible for rapidly, efficiently and
                      safely performing various duties under emergency
                      conditions frequently involving considerable hazard. The
                      work includes routine duties in the maintenance of
                      firefighting vehicles, equipment and fire service
                      facilities.
                    </p>
                  </div>
                  <div className="col-4">
                    <div class="card card-width">
                      <img
                        src="https://previews.123rf.com/images/kritiya/kritiya1207/kritiya120700058/14600490-hydrant-with-water-hoses-and-fire-extinguish-equipment.jpg?fj=1"
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
          <div class="row project-bg">
            <div class="col-sm-3">
              <div class="card shadow p-3 mb-5 bg-body rounded">
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

            <div class="col-sm-3">
              <div class="card shadow p-3 mb-5 bg-body rounded">
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

            <div class="col-sm-3">
              <div class="card shadow p-3 mb-5 bg-body rounded">
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
            <div class="col-sm-3">
              <div class="card shadow p-3 mb-5 bg-body rounded">
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
