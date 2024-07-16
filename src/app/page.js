import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AmazonLogo from "../../public/amazon.png";

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={AmazonLogo}
            alt="Amazon"
            width="80"
            height="40"
            style={{ margin: "10px" }}
          />
        </a>
        <div className="d-flex flex-row align-items-center ms-auto">
          <span className="me-3">Deliver to Jaipur 302021</span>
          <i className="fas fa-map-marker-alt me-1"></i>
          <span><b>Update location</b></span>
          <form className="d-flex ms-3" role="search" style={{ width: "600px" }}>
            <div className="input-group">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                All
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
              <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
