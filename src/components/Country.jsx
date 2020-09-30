import React from "react";
import Table from "./Table";
const Country = ({
  location: {
    state: { country },
  },
}) => {
  // Access the country object properties here now
  console.log("Data available", country);
  return (
    <React.Fragment>
      <div>
        <h1> {country.name}</h1>
        <Table data={country} />
      </div>
    </React.Fragment>
  );
};

export default Country;
