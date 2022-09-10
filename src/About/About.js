import React, { useState, useEffect } from 'react';
import ContentEditor from '../ContentEditor/ContentEditor';

const About = (props) => {
  const [edit, setEdit] = useState(false);
  const [inputs, setInputs] = useState({});

  const onEditClick = () => {
    setEdit(!edit);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = CKEDITOR.instances.editor1.getData();
    console.log(inputs);
    console.log(data);
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
                    <ContentEditor content={item.description} />
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
                  <ContentEditor content={item.description} />
                </div>
              )
            )}
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
