import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleSearch } from './../services/SearchService';

const Nav = (props) => {
  const [searchQuery, setSearchQuery] = useState('')

  const searchService=(query)=>{
    console.log(query.target.value);
    setSearchQuery(query.target.value)
    handleSearch(query.target.value)
  }
   function search(){
    const data =  handleSearch()
    console.log('Im from search service',data);
  }
  
  return (
    <React.Fragment>
      <nav className="nav flex flex-wrap items-center justify-between px-4">
        <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <span className="font-semibold text-xl tracking-tight">
            <li className="logo">
              <Link to="/" className="p-5">
                Country Database
              </Link>
            </li>
          </span>
          <span className="font-semibold text-xl tracking-tight">
            {" "}
            <li>
              <Link to="/all"  className="p-5">
                <button className="btn btn-nav">SHOW ALL</button>
              </Link>
            </li>
          </span>
        </div>

        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
        >
          <span className="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <input
            type="text"
            name="search"
            id="search"
            value={searchQuery}
            onChange={searchService}
            placeholder="Search..."
            className="bg-gray-200 focus:bg-white border-transparent focus:border-blue-400"
          />
          <button onClick={search}>Search</button>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
