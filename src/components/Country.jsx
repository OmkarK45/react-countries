import React from "react";
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
      </div>
    </React.Fragment>
  );
};

export default Country;
