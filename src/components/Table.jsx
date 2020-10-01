import React from "react";

const Table = ({ data }) => {
  return (
    <React.Fragment>
      <div className="details">
        <div className="one">
          <ul>
            <li>
              <span className="property">
                <i className="fal fa-edit"></i> Native Name
              </span>
              :<span className="value">{data.nativeName}</span>
            </li>
            <li>
              <span className="property">
                {" "}
                <i className="far fa-users"></i> Population
              </span>{" "}
              :<span className="value">{data.population}</span>
            </li>
            <li>
              <span className="property">
                {" "}
                <i className="fab fa-fort-awesome"></i> Capital
              </span>{" "}
              :<span className="value">{data.capital}</span>
            </li>
            <li>
              <span className="property">
                {" "}
                <i className="far fa-language"></i> Languages
              </span>{" "}
              :
              <span className="value">
                {data.languages.map((l, i) => (
                  <span key={i}>{l.name} | </span>
                ))}
              </span>
            </li>
            <li>
              <span className="property">
                {" "}
                <i className="far fa-coins"></i> Currencies
              </span>{" "}
              :
              <span className="value">
                {data.currencies.map((c, i) => (
                  <span key={i}>
                    {c.name}({c.symbol})
                  </span>
                ))}
              </span>
            </li>
            <li>
              <span className="property">
                {" "}
                <i className="fal fa-clock"></i> Timezone
              </span>{" "}
              :
              <span className="value">
                {data.timezones.map((c, i) => (
                  <span key={i}>{c}</span>
                ))}
              </span>
            </li>
          </ul>
        </div>
        <div className="two">
          <ul>
            <li>
              <span className="property">
                <i className="far fa-rectangle-wide"></i> Area
              </span>{" "}
              :{" "}
              <span className="value">
                {data.area} Km<sup>2</sup>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Table;
