import React,{Fragment} from "react";
import {Link} from "react-router-dom";

let Navbar=()=>{
    return(
      <Fragment>
          <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
              <div className="container">
                  <a href="/" className='navbar-brand'>React Routing </a>
                  <div className="collapse navbar-collapse">
                      <ul className="navbar-nav mx-5">
                          <li className="nav-item">
                              <Link to="/" className="nav-link">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/employees" className="nav-link">Employees</Link>
                          </li>

                      </ul>

                  </div>
              </div>

          </nav>
      </Fragment>
    )
}
export default Navbar