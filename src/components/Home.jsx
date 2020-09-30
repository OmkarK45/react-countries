import React from "react";
import img from '../img.png'
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <React.Fragment>
      <div className="home-wrapper">
        <div className="left">
          <div className="text-holder">
            <h2 className="home-hero-upper">Explore</h2>
            <h2 className="home-hero-bottom">Countries</h2>
            <Link to="/all">
              <button className="btn btn-nav">SHOW ALL</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <img src={img} className='hero-image' alt=""/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
