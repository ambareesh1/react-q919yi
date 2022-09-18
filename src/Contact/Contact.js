import React, { useState, form, useEffect } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import './Contact.css';

const Contact = () => {
  return (
    <div className="m-2">
      <div className="row contact-form-bg">
        <div className="col-lg-4">
          <div class="contact-form-wrapper d-flex">
            <form action="#" class="contact-form">
              <h5 class="title">Contact us</h5>
              <p class="description">
                Feel free to contact us if you need any assistance, any help or
                another question.
              </p>
              <div>
                <input
                  type="text"
                  class="form-control rounded border-white mb-3 form-input"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  class="form-control rounded border-white mb-3 form-input"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <textarea
                  id="message"
                  class="form-control rounded border-white mb-3 form-text-area"
                  rows="5"
                  cols="30"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div class="submit-button-wrapper">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-4">
          <div class="contact-form-wrapper d-flex">
            <form action="#" class="contact-form">
              <h5 class="title">Address</h5>
              <div class="contact-infos description">
                <i class="fa-solid fa-phone"></i>
                <div class="contact-body">
                  <p>
                    <a href="tel:919398277980">+91 9398277980</a> &nbsp; &nbsp;
                    | &nbsp; &nbsp;{' '}
                    <a href="tel:918125377980">+91 8125377980</a>
                  </p>
                </div>
              </div>
              <div class="contact-infos description">
                <i class="fa-solid fa-envelope"></i>
                <div class="contact-body">
                  <p>
                    <a href="mailto:shrisathip@gmail.com">
                      shrisathip@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div class="contact-infos description">
                <i class="fa-solid fa-location"></i>
                <div class="contact-body">
                  <p class=" address-text">
                    HJ8H+9PP Nainavaram,
                    <br />
                    Krishna, Andhra Pradesh 521228
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-4">
          <div class="card mt-4">
            <div class="card-body">
              <h5 class="card-title">Location</h5>
            </div>

            <div class="card-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.2094691105926!2d80.62715311486504!3d16.565960688575736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x87cf61e418054046!2zMTbCsDMzJzU3LjUiTiA4MMKwMzcnNDUuNiJF!5e0!3m2!1sen!2sin!4v1663511016425!5m2!1sen!2sin"
                width="400"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
