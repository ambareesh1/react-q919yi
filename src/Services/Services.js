import React, { useState, form, useEffect } from 'react';
import { CKEditor } from 'ckeditor4-react';
import { db } from '../firebase-config';
import { writeBatch, doc } from 'firebase/firestore';
import ClassicEditor from '@ckeditor/ckeditor4-build-classic';
import './Services.css';

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { DataService } from '../DataService';
const Services = (props) => {
  console.log(props);
  const [edit, setEdit] = useState(false);
  const [inputs, setInputs] = useState({});
  const [descriptions, setDescription] = useState({});
  const [serviceDescription, setServiceDescription] = useState({});

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
        const about = doc(db, 'Service', key);
        const newFields = { name: value };
        batch.update(about, newFields);
      });
      // Commit the batch
      await batch.commit();
    }
    if (descriptions) {
      const batch = writeBatch(db);
      Object.entries(descriptions).map(([key, value]) => {
        const about = doc(db, 'Service', key);
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
          src={props.serviceDes[0].backgroundImage}
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
        {edit ? (
          <CKEditor
            activeClass="p10"
            name={props.serviceDes[0].identifier}
            initData={props.serviceDes[0].description}
            onChange={(event) =>
              onChangeDescription(event, props.serviceDes[0].id)
            }
          />
        ) : (
          <p
            className="service-description"
            dangerouslySetInnerHTML={{
              __html: props.serviceDes[0].description,
            }}
          ></p>
        )}
      </div>

      <div className="container shadow p-3 mb-5 bg-body rounded">
        <div className="m-2">
          {edit && (
            <button type="button" class="btn btn-danger float-end">
              <i class="bi bi-file-plus-fill"></i>
            </button>
          )}
          <form>

            </form>
          <form onSubmit={handleSubmit}>
            <ul className="nav nav-tabs mb-3" id="pills-tab" role="tablist">
              {props.items.map((item) =>
                item.order == 1 ? (
                  <li className="nav-item" role="presentation">
                    {edit ? (
                      <input
                        type="text"
                        name={item.id}
                        className="form-control"
                        defaultValue={item.name}
                        onChange={handleChange}
                      />
                    ) : (
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
                        {item.name}
                      </button>
                    )}
                  </li>
                ) : (
                  <li className="nav-item" role="presentation">
                    {edit ? (
                      <input
                        type="text"
                        name={item.id}
                        className="form-control"
                        defaultValue={item.name}
                        onChange={handleChange}
                      />
                    ) : (
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
                        {item.name}
                      </button>
                    )}
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
                        onChange={(event) =>
                          onChangeDescription(event, item.id)
                        }
                      />
                    ) : (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      ></p>
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
                        onChange={(event) =>
                          onChangeDescription(event, item.id)
                        }
                      />
                    ) : (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      ></p>
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
    </div>
  );
};

export default Services;
