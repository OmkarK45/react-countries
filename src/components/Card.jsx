import React from "react";
import { Link } from "react-router-dom";

const Card = ({ country }) => {
  return (
    <React.Fragment>
     
      <div className="card">
        <div className="img-wrapper">
          <img src={country.flag} alt="" />
        </div>
        <div className="main">

          <div className="wrapper">
            <Link
              className="name"
              key={country.alpha2Code}
              to={{
                pathname: `all/${country.alpha2Code}`,
                state: { ...{ country } },
              }}
            >
              {country.name}
            </Link>

            <p className="capital">{country.capital}</p>
          </div>

          <div className="tag-wrapper">
            <span className="region">
              <i className="far fa-globe-asia"></i> {country.region}
            </span>
            {country.currencies.map((currency) => (
              <span key={currency.code} className="currency">
                <i className="far fa-money-bill-wave-alt"></i> {currency.code}
              </span>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
