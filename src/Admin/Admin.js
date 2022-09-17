import React, { useState } from 'react';
import './Admin.css';
import { NavLink } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Admin = (props) => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePwd = (event) => {
    setPwd(event.target.value);
  };

  const onSubmit = () => {
    if (email == 'admin@admin.com' && pwd == 'admin@123') {
      localStorage.setItem('isAdmin', true);
      history('/');
    } else {
      localStorage.setItem('isAdmin', false);
    }
  };

  return (
    <div className="">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <NavLink className="navbar-brand navbar-title" to="/Admin">
            <img
              className="img-height"
              src="https://i.ibb.co/55yrdGk/satiprojects-logo.jpg"
              alt="Energia Logo"
            />
          </NavLink>
        </div>
      </nav>
      <form className="mt-3">
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
              value={email}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChangeEmail}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={pwd}
              className="form-control"
              id="exampleInputPassword1"
              onChange={onChangePwd}
            />
          </div>

          <button type="button" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
