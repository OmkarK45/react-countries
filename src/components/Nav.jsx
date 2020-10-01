import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <React.Fragment>
      <nav className="nav flex flex-wrap items-center justify-between px-4">
        <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <div>
            <span className="font-semibold text-xl tracking-tight">
              <li className="logo">
                <Link to="/" className="p-5">
                  Country Database
                </Link>
              </li>
            </span>
          </div>
          <div>
            <span className="font-semibold text-xl tracking-tight">
              {" "}
              <li>
                <Link to="/all" className="p-5">
                  <button className="btn btn-nav">SHOW ALL</button>
                </Link>
              </li>
            </span>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
