import React from 'react';

const Model = (props) => {
  const onHideModalHandle = () => {
    props.onClose();
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
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Link</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {props.items[0].data.map((item) => (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.link}</td>
                    <td>
                      <i class="bi bi-pencil-fill"></i>
                    </td>
                    <td>
                      <i class="bi bi-trash-fill"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
