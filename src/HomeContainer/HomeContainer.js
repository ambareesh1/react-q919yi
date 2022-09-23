import React, { useState } from 'react';
import './HomeContainer.css';
const HomeContainer = () => {
  return (
    <div class="row bg-white">
      <div class="container">
        <div class="shadow p-3 m-3 bg-body rounded">
          <h3 class="header-text"> Shri Sathi Projects </h3>
          <p class="header-text-description">
            Synergy infra Consultants was established in 1995 as Electrical
            consultants by a team of enthusiastic and experienced engineers and
            grown into a complete MEP ( Mechanical, Electrical & Plumbing )
            Consultancy Organization with special focus on Energy Conservation,
            Green Business, Automation Systems and Water conservation,
            Harvesting / Treatment Studies. Synergy infra is awarded with ISO
            9001: 2008 for its procedural manner in maintaining the data and the
            standardized way of doing projects, by maintaining checklists at
            each and every stage of the project We are thoroughly conversant
            with the latest national and international codes, practices and also
            the latest Technical developments.
          </p>
          <p class="header-text-description">
            We carry out the design engineering as per Indian Standard
            Specifications, Indian Electricity Rules, National Electrical Code
            and local Electricity Board regulations for Indian projects and
            ASHRAE, NEC, NFPA, ANSI, ASTM, IEEE, NEMA, IBC, IPC, IMC, TAC etc
            for international projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
