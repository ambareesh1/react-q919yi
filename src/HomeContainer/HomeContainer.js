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
                Renewable Energy
              </button>
              <button
                class="nav-link text-start btn-width"
                id="v-pills-disabled-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-disabled"
                type="button"
                role="tab"
                aria-controls="v-pills-disabled"
                aria-selected="false"
                disabled
              >
                Civil
              </button>
              <button
                class="nav-link text-start btn-width"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Electrical
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
                BIM
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
                      <p class="text-justify">
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
                          src="https://thumbs.dreamstime.com/z/electricians-work-wiring-lighting-flat-vector-illustration-isolated-working-indoors-white-background-electrical-221226713.jpg"
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
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
                <p>
                  Shri Sathi Projects has carried out a few MW range solar PV
                  projects and has been monitoring the performance for quite
                  some time. Shri Sathi Projects office is the best example with
                  Net metering and nearly above 60 to 70% of daily consumption
                  for the last two years. Shri Sathi Projects can conduct pre
                  installation study i.e solar insolation, designing of PV
                  system and extend complete support in execution and
                  commissioning of the system
                </p>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-disabled"
                role="tabpanel"
                aria-labelledby="v-pills-disabled-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
                tabindex="0"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
