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

const About = (props) => {
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
    debugger;
    event.preventDefault();
    if (inputs) {
      const batch = writeBatch(db);
      Object.entries(inputs).map(([key, value]) => {
        debugger;
        console.log(key);
        console.log(value);
        const about = doc(db, 'About', key);
        const newFields = { name: value };
        batch.update(about, newFields);
      });
      // Commit the batch
      await batch.commit();
    }
    if (descriptions.length > 0) {
    }
  };

  const onChangeDescription = (event, name) => {
    const value = event.editor.getData();
    setDescription((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="about-custom container mt-4" id="about-1">
      <div className="services-banner-custom">
        <h4 className="heading-title services-header-custom">About Us</h4>
      </div>

      <div className="float-right" onClick={onEditClick}>
        <i class="bi bi-pencil-fill"></i>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            {props.items.map((item) =>
              item.order == 1 ? (
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
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
                        name={item.identifier}
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
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
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
                        name={item.identifier}
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

          <div class="tab-content">
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
                        onChangeDescription(event, item.identifier)
                      }
                    />
                  ) : (
                    item.description
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
                        onChangeDescription(event, item.identifier)
                      }
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

export default About;
