import React, { useState } from 'react';
import Table from '../Table/Table';
import { db } from '../firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';

const Model = (props) => {
  const onHideModalHandle = () => {
    props.onClose();
  };
  const componentsCollectionRef = collection(db, 'Navbar');
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [order, setOrder] = useState(0);
  const [isAdd, setAdd] = useState(false);

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeLink = (event) => {
    setLink(event.target.value);
  };
  const onChangeOrder = (event) => {
    setOrder(event.target.value);
  };

  const showAddForm = (event) => {
    setAdd(!isAdd);
  };

  const hideAddForm = (event) => {
    setAdd(false);
  };

  const onAddItem = async (event) => {
    debugger;
    let item = {
      name: name,
      link: link,
      order: order,
    };

    await addDoc(componentsCollectionRef, item);
    props.reload();
  };

  const tableColumns = [
    {
      order: 1,
      name: '#',
    },
    {
      order: 2,
      name: 'Name',
    },
    {
      order: 3,
      name: 'Link',
    },
    {
      order: 4,
      name: '',
    },

    {
      order: 5,
      name: '',
    },
  ];

  const tableBody = props.items[0].data;

  const onCancelEdit = (event) => {
    setEditMode(false);
  };
  return (
    <div
      className=""
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {props.items[0].title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onHideModalHandle}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="float-right">
                <i class="bi bi-file-plus-fill" onClick={showAddForm}></i>
                Add Item
              </div>
              {isAdd && (
                <div>
                  <div className="form-group">
                    <label> Name </label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={onChangeName}
                    />
                  </div>
                  <div className="form-group">
                    <label> Link </label>
                    <input
                      type="text"
                      className="form-control"
                      value={link}
                      onChange={onChangeLink}
                    />
                  </div>
                  <div className="form-group">
                    <label> Order </label>
                    <input
                      type="number"
                      className="form-control"
                      value={order}
                      onChange={onChangeOrder}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={onAddItem}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={hideAddForm}
                  >
                    Cancel
                  </button>
                </div>
              )}
              <Table
                class="table"
                tableColumns={tableColumns}
                tableBody={tableBody}
                reload={props.reload}
              ></Table>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              onClick={onHideModalHandle}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
