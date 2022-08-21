import React, { useState, form, useEffect } from 'react';
import { db } from '../firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
const Table = (props) => {
  const [isEditMode, setEditMode] = useState(false);
  const [navName, setNavName] = useState('');
  const [tableBody, setTableBody] = useState([]);

  const [rowEdit, setRowEdit] = useState('');
  const onEditNavbar = (event) => {
    setEditMode(true);
    //setRowEdit(event.target.value);
  };
  const onCancelEdit = (event) => {
    setEditMode(false);
  };

  const onChangeNavbarName = (event, id) => {
    console.log(id);
    setRowEdit(event.target.value);
  };
  const onChangeNavbarLink = (event) => {};

  useEffect(() => {
    setTableBody(props.tableBody);
  }, []); // <- add the count variable here

  const onUpdate = async (id) => {
    const navbarDoc = doc(db, 'Navbar', id);
    const newFields = { name: rowEdit };
    await updateDoc(navbarDoc, newFields);
    props.reload();
  };

  const onDelete = async (id) => {
    debugger;
    const navbarDoc = doc(db, 'Navbar', id);
    const newFields = { active: false };
    await updateDoc(navbarDoc, newFields);
    props.reload();
  };

  return (
    <table class="table">
      <thead>
        <tr>
          {props.tableColumns.map((item) => (
            <th key={item.order} scope="col">
              {item.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((item) => (
          <tr>
            <th scope="row">{item.id}</th>
            <td>
              {!isEditMode && item.name}

              {isEditMode && (
                <form>
                  <input
                    type="text"
                    className="form-control"
                    name={item.name}
                    defaultValue={item.name}
                    onChange={onChangeNavbarName}
                  />
                </form>
              )}
            </td>

            <td>{item.link}</td>
            <td>
              {!isEditMode && (
                <i className="bi bi-pencil-fill" onClick={onEditNavbar}></i>
              )}
              {isEditMode && (
                <>
                  <i
                    className="bi bi-arrow-up-right-circle-fill"
                    onClick={() => onUpdate(item.id)}
                  ></i>
                  <i className="bi bi-x-circle-fill" onClick={onCancelEdit}></i>
                </>
              )}
            </td>
            <td>
              <i
                className="bi bi-trash-fill"
                onClick={() => onDelete(item.id)}
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
