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
                class="img-fluid rounded-start shadow p-3 mb-5 bg-body rounded"
                alt="..."
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">Join Our Beautiful Journey</h5>
                <ol class="list-group list-group-numbered">
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Accountant</div>
                      <p> Need accountant to see the works of organization. </p>
                    </div>
                    <span class="badge bg-success rounded-pill">01</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Supervisor</div>
                      <p> Need supervisor to maintain the resourses. </p>
                    </div>
                    <span class="badge bg-success rounded-pill">07</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Plumber</div>
                      <p>
                        {' '}
                        Need plumbers to be part of our team to help in fixing
                        the plumbing work.{' '}
                      </p>
                    </div>
                    <span class="badge bg-success rounded-pill">14</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Electrician</div>
                      <p>
                        {' '}
                        Need Electrician to be part of our team to help in
                        fixing the electrical work.{' '}
                      </p>
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
