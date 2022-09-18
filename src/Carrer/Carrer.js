import React, { useState, form, useEffect } from 'react';
import './Carrer.css';
const Carrer = () => {
  return (
    <div class="row">
      <img src="https://i.ibb.co/58CF5pz/p12.jpg" />
      <div className="d-flex aligns-items-center justify-content-center">
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
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrer;
