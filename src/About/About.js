import React from 'react';
import ContentEditor from '../ContentEditor/ContentEditor';
const About = (props) => {
  const whoWeAreContent =
    'Synergy infra Consultants was established in 1995 as Electrical consultants by a team of enthusiastic and experienced engineers and grown into a complete MEP ( Mechanical, Electrical & Plumbing ) Consultancy Organization with special focus on Energy Conservation, Green Business, Automation Systems and Water conservation, Harvesting / Treatment Studies. Synergy infra is awarded with ISO 9001: 2008 for its procedural manner in maintaining the data and the standardized way of doing projects, by maintaining checklists at each and every stage of the project';
  return (
    <div className="about-custom container mt-4" id="about-1">
      <div className="services-banner-custom">
        <h4 className="heading-title services-header-custom">About Us</h4>
      </div>
      <div className="container">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Who we are
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              What we do
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Vision & Mission
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="core-values-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Core-Values"
              type="button"
              role="tab"
              aria-controls="pills-Core-Values"
              aria-selected="false"
            >
              Core Values
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="quality-policy-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-quality-policy"
              type="button"
              role="tab"
              aria-controls="pills-quality-policy"
              aria-selected="false"
            >
              Quality Policy
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <ContentEditor content={whoWeAreContent} />
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <ContentEditor />
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            Synergy infra Consultants was established in 1995 as Electrical
            consultants by a team of enthusiastic and experienced engineers and
            grown into a complete MEP ( Mechanical, Electrical & Plumbing )
            Consultancy Organization with special focus on Energy Conservation,
            Green Business, Automation Systems and Water conservation,
            Harvesting / Treatment Studies. Synergy infra is awarded with ISO
            9001: 2008 for its procedural manner in maintaining the data and the
            standardized way of doing projects, by maintaining checklists at
            each and every stage of the project
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
