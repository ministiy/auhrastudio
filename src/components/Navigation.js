import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">
          Auhra Studio
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggler">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" data-toggle="collapse" data-target="#navbarToggler" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" data-toggle="collapse" data-target="#navbarToggler" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" data-toggle="collapse" data-target="#navbarToggler" to="/contact">
                  Contact
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/portfolio" ? "active" : ""
                }`}
              >
                <Link class="nav-link" data-toggle="collapse" data-target="#navbarToggler" to="/portfolio">
                  Portfolio
                </Link>
              </li>
            </ul>
        </div>
      </nav>
  );
}

export default withRouter(Navigation);