import React from "react";
import logo from "./images/Screenshot 2022-05-26 123931.png"
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav  className="navbar navbar-expand-lg navbar-light  bg-light">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img width={"100px"} src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/entertainment"}>
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/business"}>
                Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sports"}>
                  Sports
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to={"/health"}>
                Health
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
