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
    <div className="about-custom container mt-5" id="about-1">
      <div className="services-banner-custom d-flex">
        <h4 className="heading-title services-header-custom">Our Services</h4>{' '}
        <span className="ps-3" onClick={onEditClick}>
          <i class="bi bi-pencil-fill"></i>
        </span>
      </div>
      <section id="body" class="p-1">
            <div class="row">
                <img class="w-100" src="./assets/images/about/p11.jpg" alt="Solor Project">
            </div>
            <div class="top-left">
                <h3 class="custom-project-header"> Our Services</h3>
            
      
                <p style="color: #fff;width: 55%;">
                    Shri sathi projects as a Electrical consultants by a team of enthusiastic and
                     experienced engineers and grown into a complete MEP ( Mechanical, Electrical & Plumbing ) Consultancy
                      Organization with special focus on Energy Conservation, Green Business, Automation Systems and Water
                       conservation, Harvesting / Treatment Studies. Synergy infra is awarded with ISO 9001: 2008 for its
                        procedural manner in maintaining the data and the standardized way of doing projects, by maintaining 
                        checklists at each and every stage of the project</p>
            </div>


            <div class="row m-3">
                <div class="col-12">
                  
                      <ul class="nav nav-tabs" role="tablist">
                          <li><a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="false"> <i class="fa-solid fa-circle-info service-list-icon-custom"></i> Info</a></li>
                          <li><a class="nav-link active" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-renewable" role="tab" aria-controls="v-pills-settings" aria-selected="true"><i class="fa-solid fa-solar-panel service-list-icon-custom"></i> Renewable Energy</a></li>
                          <li><a class="nav-link" id="v-pills-civil-tab" data-toggle="pill" href="#v-pills-civil" role="tab" aria-controls="v-pills-messages" aria-selected="false"> <i class="fa-solid fa-square-poll-horizontal service-list-icon-custom"></i>Civil</a></li>
                          <li><a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fa-solid fa-lightbulb service-list-icon-custom"></i>Electrical</a></li>
                          <li><a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"> <i class="fa-solid fa-toolbox service-list-icon-custom"></i>Mechanical</a></li>
                          <li> <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"> <i class="fa-solid fa-fire-extinguisher service-list-icon-custom"></i> Fire Fighting</a></li>
                          <li><a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"> <i class="fa-solid fa-helmet-safety service-list-icon-custom"></i> ELV</a></li>
                          <li> <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"> <i class="fa-solid fa-road-bridge service-list-icon-custom"></i>BIM</a></li>  
                      </ul>
               
                </div>
                <div class="col-12">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade mt-2" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                      <div class="row">
                        <div class="d-flex">
                          <div class="col-8">
                            <p class="text-justify">Shri Sathi Projects Consultants was established in 2018 as Electrical
                              consultants by a team of enthusiastic and experienced engineers and grown into a complete MEP (
                              Mechanical, Electrical &amp; Plumbing ) Consultancy Organization with special focus on Energy
                              Conservation, Green Business, Automation Systems and Water conservation, Harvesting / Treatment
                              Studies. Shri Sathi Projects is awarded with ISO 9001: 2008 for its procedural manner in
                              maintaining the data and the standardized way of doing projects, by maintaining checklists at each
                              and every stage of the project
        
                              We are thoroughly conversant with the latest national and international codes, practices and also
                              the latest Technical developments. We carry out the design engineering as per Indian Standard
                              Specifications, Indian Electricity Rules, National Electrical Code and local Electricity Board
                              regulations for Indian projects and ASHRAE, NEC, NFPA, ANSI, ASTM, IEEE, NEMA, IBC, IPC, IMC, TAC
                              etc for international projects.</p>
                          </div>
                          <div class="col-4">
                            <div class="card" style="width: 18rem;">
                              <img src="https://thumbs.dreamstime.com/z/electricians-work-wiring-lighting-flat-vector-illustration-isolated-working-indoors-white-background-electrical-221226713.jpg" class="card-img-top" alt="...">
                              <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                  the card's content.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade mt-2" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      <p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                        incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat
                        quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate
                        minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea
                        incididunt minim occaecat.</p>
                    </div>
                    <div class="tab-pane fade mt-2" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                      <p>
                        Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                        incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat
                        quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate
                        minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea
                        incididunt minim occaecat. </p>
                    </div>
        
                    <div class="tab-pane fade mt-2 active show" id="v-pills-renewable" role="tabpanel" aria-labelledby="v-pills-renewable">
                      <ul class="nav nav-tabs nav-justified">
                        <li class="nav-item">
                          <a class="nav-link active" data-toggle="pill" href="#home">Solar</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="pill" href="#menu1">Hydro</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="pill" href="#menu2">Wind</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="pill" href="#menu3">Tidel Power Plants</a>
                        </li>
                      </ul>
        
                      <!-- Tab panes -->
                      <div class="tab-content">
                        <div class="tab-pane container active" id="home">
                          <div class="row mt-2">
                            <div class="d-flex">
                              <div class="col-lg-5">
                                <div class="card shadow-custom" style="width: 20rem;">
                                  <img class="card-img-top" src="assets/images/clients/solor.jpeg" alt="Card image cap">
                                  <div class="card-body">
                                    <h5 class="card-title">25mw floated solar power plant in vizag</h5>
                                    <p class="card-text">We provided the best in delivering the product with quality. The solar
                                      panels are fixed
                                      in stipulated time &amp; the technicians &amp; labours provided better quality of work. </p>
        
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-7">
                                <p class="card-text text-justify">
                                  Shri Sathi Projects has carried out a few MW range solar PV projects and has been monitoring
                                  the performance for
                                  quite some time. Shri Sathi Projects office is the best example with Net metering and nearly
                                  above 60 to 70% of
                                  daily consumption for the last two years.
                                </p>
                                <p class="card-text text-justify">
                                  Shri Sathi Projects can conduct pre installation study i.e solar insolation, designing of PV
                                  system and extend
                                  complete support in execution and commissioning of the system
                                </p>
                                <img src="assets/images/clients/solor_panel.PNG" style="width: 200px;" alt="solor panels">
                                <img src="assets/images/clients/solor_man.PNG" style="width: 150px;height: 150px;margin-left: 10%;" alt="solor panels">
                              </div>
                            </div>
                          </div>
        
                        </div>
                        <div class="tab-pane container fade" id="menu1">...</div>
                        <div class="tab-pane container fade" id="menu2">...</div>
                      </div>
                    </div>
                    <div class="tab-pane fade mt-2" id="v-pills-civil" role="tabpanel" aria-labelledby="v-pills-civil-tab">
                      <h4>General Supply &amp; execution works</h4>
                    </div>
                  </div>
                </div>
              </div>
     

     

        </section>

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
