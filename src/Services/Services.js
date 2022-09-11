import React, { useState, form, useEffect } from 'react';
import { CKEditor } from 'ckeditor4-react';
import { db } from '../firebase-config';
import { writeBatch, doc } from 'firebase/firestore';
import ClassicEditor from '@ckeditor/ckeditor4-build-classic';

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
const Services = (props) => {
  const [edit, setEdit] = useState(false);
  const [inputs, setInputs] = useState({});
  const [descriptions, setDescription] = useState({});

  const onEditClick = () => {
    setEdit(!edit);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputs) {
      const batch = writeBatch(db);
      Object.entries(inputs).map(([key, value]) => {
        const about = doc(db, 'About', key);
        const newFields = { name: value };
        batch.update(about, newFields);
      });
      // Commit the batch
      await batch.commit();
    }
    if (descriptions) {
      debugger;
      const batch = writeBatch(db);
      Object.entries(descriptions).map(([key, value]) => {
        const about = doc(db, 'About', key);
        const newFields = { description: value };
        batch.update(about, newFields);
      });
      // Commit the batch
      await batch.commit();
    }
    onEditClick();
    props.reload();
  };

  const onChangeDescription = (event, name) => {
    const value = event.editor.getData();
    setDescription((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="about-custom" id="about-1">
      <div className="row">
        <img
          className="w-100"
          src="https://i.ibb.co/NsQ3rBH/p11.jpg"
          alt="Solor Project"
        />
      </div>

      <div className="top-left">
        <div className="services-banner-custom d-flex">
          <h4 className="custom-project-header">Our Services</h4>
          <span className="ps-3" onClick={onEditClick}>
            <i className="bi bi-pencil-fill"></i>
          </span>
        </div>

        <p className="service-description">
          Shri sathi projects as a Electrical consultants by a team of
          enthusiastic and experienced engineers and grown into a complete MEP (
          Mechanical, Electrical & Plumbing ) Consultancy Organization with
          special focus on Energy Conservation, Green Business, Automation
          Systems and Water conservation, Harvesting / Treatment Studies.
          Synergy infra is awarded with ISO 9001: 2008 for its procedural manner
          in maintaining the data and the standardized way of doing projects, by
          maintaining checklists at each and every stage of the project
        </p>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            {props.items.map((item) =>
              item.order == 1 ? (
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id={item.identifier}
                    data-bs-toggle="pill"
                    data-bs-target={'#' + item.identifier + 'content'}
                    type="button"
                    role="tab"
                    aria-controls={'#' + item.identifier + 'content'}
                    aria-selected="true"
                  >
                    {edit ? (
                      <input
                        type="text"
                        name={item.id}
                        className="form-control"
                        defaultValue={item.name}
                        onChange={handleChange}
                      />
                    ) : (
                      item.name
                    )}
                  </button>
                </li>
              ) : (
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id={item.identifier}
                    data-bs-toggle="pill"
                    data-bs-target={'#' + item.identifier + 'content'}
                    type="button"
                    role="tab"
                    aria-controls={'#' + item.identifier + 'content'}
                    aria-selected="true"
                  >
                    {edit ? (
                      <input
                        type="text"
                        name={item.id}
                        className="form-control"
                        defaultValue={item.name}
                        onChange={handleChange}
                      />
                    ) : (
                      item.name
                    )}
                  </button>
                </li>
              )
            )}
          </ul>

          <div className="tab-content">
            {props.items.map((item) =>
              item.order == 1 ? (
                <div
                  className="tab-pane fade show active"
                  id={item.identifier + 'content'}
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  {edit ? (
                    <CKEditor
                      activeClass="p10"
                      name={item.identifier}
                      initData={item.description}
                      onChange={(event) => onChangeDescription(event, item.id)}
                    />
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    ></div>
                  )}
                </div>
              ) : (
                <div
                  className="tab-pane "
                  id={item.identifier + 'content'}
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  {edit ? (
                    <CKEditor
                      activeClass="p10"
                      name={item.identifier}
                      initData={item.description}
                      onChange={(event) => onChangeDescription(event, item.id)}
                    />
                  ) : (
                    item.description
                  )}
                </div>
              )
            )}
          </div>
          {edit && (
            <div className="mt-3">
              <button type="submit" className="btn btn-success">
                Update
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Services;
