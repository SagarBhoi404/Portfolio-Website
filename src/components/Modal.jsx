import React from "react";

const Modal = (props) => {
  const project = props.data;
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 " id="exampleModalLabel">
                {project?.title}
              </h1>
              <button
                type="button"
                className="modal-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <p className="">
                  <span className="primary-color">Technologies: </span>{" "}
                  <span className="fs-7">{project?.technologies}</span>
                </p>
                <p className="">
                  <span className="primary-color">Github: </span>{" "}
                  <a className="fs-7" href={project?.github} target="_blank">
                    {project?.github} <i className="ri-external-link-line"></i>
                  </a>
                  <span className="modal-note">
                    *Note: Project Screenshot added in github repository.
                  </span>
                </p>
                {project?.demo ? (
                  <p className="">
                    <span className="primary-color">Live Demo : </span>{" "}
                    <a className="fs-7" href={project?.demo} target="_blank">
                      {project?.demo} <i className="ri-external-link-line"></i>
                    </a>
                  </p>
                ) : (
                  ""
                )}
              </div>
              <h6 className="primary-color">Project Description</h6>
              <p className="fs-7">{project?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
