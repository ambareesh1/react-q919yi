import React, { useState, form, useEffect } from 'react';
import { CKEditor } from 'ckeditor4-react';
import { db } from '../firebase-config';
import { writeBatch, doc } from 'firebase/firestore';
import ClassicEditor from '@ckeditor/ckeditor4-build-classic';
import './Projects.css';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { DataService } from '../DataService';
const Projects = (props) => {
  console.log(props);
  const [edit, setEdit] = useState(false);
  const [inputs, setInputs] = useState({});
  const [descriptions, setDescription] = useState({});
  const [serviceDescription, setServiceDescription] = useState({});

  const [title, setTitle] = useState({});
  const [desc, setDes] = useState({});
  const [add, setAdd] = useState(false);

  const serviceCollectionRef = collection(db, 'Projects');
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

  const addItem = async (event) => {
    debugger;
    let item = {
      name: title,
      description: desc,
      category: 'tabs',
      imgUrl: '',
      order: props.items.length + 1,
    };

    await addDoc(serviceCollectionRef, item);
    props.reload();
    setAdd(!add);
    setEdit(false);
  };

  const cancelItem = () => {
    setAdd(false);
  };

  const showAddForm = () => {
    setAdd(!add);
  };

  const onChangeDes = (event) => {
    setDes(event.editor.getData());
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onCancelEdit = (event) => {
    setEdit(false);
  };
  return (
    <div>
      <div className="about-custom" id="about-1">
        <div className="row">
          <img
            className="w-100"
            src={props.proDesc[0].backgroundImage}
            alt="Solor Project"
          />
        </div>

        <div className="top-left">
          <div className="services-banner-custom d-flex">
            <h4 className="custom-project-header">Our Projects</h4>
            <span className="ps-3" onClick={onEditClick}>
              <i className="bi bi-pencil-fill"></i>
            </span>
          </div>
          <div className="d-none d-sm-block">
            {edit ? (
              <CKEditor
                activeClass="p10"
                name={props.proDesc[0].name}
                initData={props.proDesc[0].description}
                onChange={(event) =>
                  onChangeDescription(event, props.proDesc[0].id)
                }
              />
            ) : (
              <p
                className="service-description"
                dangerouslySetInnerHTML={{
                  __html: props.proDesc[0].description,
                }}
              ></p>
            )}
          </div>
        </div>
      </div>
      <div className="row project-background">
        <div className="col-lg-6">
          <div className="card-columns m-5">
            <div className="card shadow  bg-body rounded">
              <div>
                <img
                  className="project-card-image-style"
                  src="https://i.ibb.co/fkSLtQp/p1.jpg"
                  alt="solor"
                />
              </div>
            </div>
            <div className="card">
              <div>
                <img
                  className="project-card-image-style"
                  src="https://i.ibb.co/Rgh3TVK/p3.jpg"
                  alt="solor"
                />
              </div>
            </div>
            <div className="card">
              <div>
                <img
                  className="project-card-image-style"
                  src="https://i.ibb.co/Rgh3TVK/p3.jpg"
                  alt="solor"
                />
              </div>
            </div>
            <div className="card">
              <div>
                <img
                  className="project-card-image-style"
                  src="https://i.ibb.co/NCWDYqZ/p2.jpg"
                  alt="solor"
                />
              </div>
            </div>
            <div className="card">
              <div>
                <img
                  className="project-card-image-style"
                  src="https://i.ibb.co/Rgh3TVK/p3.jpg"
                  alt="solor"
                />
              </div>
            </div>
            <div className="card">
              <div>
                <img
                  className="project-card-image-style"
                  src="https://i.ibb.co/Rgh3TVK/p3.jpg"
                  alt="solor"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="m-5">
            <h1> Infrastructure Development </h1>
            <p className="text-color">
              From major and complex infra projects such as building roads,
              bridges, airport terminals, metro rail stations, solar power
              bases, irrigation projects to bus terminals, multi-level parking
              complexes, sports complexes and many more industrial projects, It
              executed on end-to-end development on many challenging projects.
            </p>
          </div>
        </div>
      </div>
      <div className="row commercial-bg">
        <div className="col-lg-6">
          <div className="m-5">
            <h1 className="text-color"> Commercial Projects </h1>

            <p className="text-color">
              Commercial Projects From upscale business complexes, convention
              centres, auditoriums, IT parks, corporate structures to shopping
              malls, hyper markets, hospitality, and entertainment complexes,
              Projects' portfolio boasts of stunning landmark buildings.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="m-5">
            <img
              alt="commercial projects"
              className="mx-auto d-block custom-box-shadow rounded"
              src="https://i.ibb.co/hLJFhth/p7.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
