import React from "react";
import {Link} from 'react-router-dom'
const Card = ({ country }) => {
  // console.log(data);
  return (
      <div className="card">
          <div className="img-wrapper">
              <img src={country.flag} alt=""/>
          </div>
          <div className="main">
              {/* 1. Country Title
              2. Country Code
              3. Country Currency */}
              
              <Link className='name' key={country.alpha2Code} to={{
              pathname: `all/${country.alpha2Code}`,
              state: {...{country}}
            }}>{country.name}</Link>
            <p className='capital'>{country.capital}</p>
        <span className='region'><i className="far fa-globe-asia"></i> {country.region}</span>
          </div>

      </div>
  );
};

export default Card;
