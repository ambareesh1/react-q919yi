import React, { useState } from 'react';
import './Admin.css';
import { NavLink } from 'react-router-dom';
const Admin = (props) => {
  return (
    <div className="">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <NavLink className="navbar-brand" to="/Admin">
            Shri Sathi Projects
          </NavLink>
        </div>
      </nav>
      <form>
        <div className="col-lg-6 mx-auto shadow p-5  bg-body rounded">
          <div className="login-bg">
            <h3 className="p-3 login-text-color">Login </h3>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
