import React, { useState, form, useEffect } from 'react';
import './Carrer.css';
const Carrer = () => {
  return (
    <div class="row">
      <img
        className="img-height"
        src="https://i.ibb.co/NWY040Y/pexels-aksonsat-uanthoeng-1078850-1.jpg"
      />
      <div className="d-flex aligns-items-center justify-content-center div-on-image">
        <div class="card  card-img mb-3">
          <div class="row g-0">
            <div class="col-md-5">
              <img
                src="https://i.ibb.co/CV3fsLy/pexels-linda-ellershein-3127880.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">Join Our Beautiful Journey</h5>
                <ol class="list-group list-group-numbered">
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <span class="badge bg-success rounded-pill">14</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <span class="badge bg-success rounded-pill">14</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <span class="badge bg-success rounded-pill">14</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrer;
