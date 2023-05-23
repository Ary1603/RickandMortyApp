import React from "react";

function Pagination({ prev, next, onPrevious, onNext }) {
  const handdlePrevious = () => {
    onPrevious();
  };

  const handdleNext = (evento) => {
    onNext();
  };
  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handdlePrevious}>
              Previous
            </button>
          </li>
        ) : null}

        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handdleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Pagination;
