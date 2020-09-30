import React from "react";

const Country = ({
  location: {
    state: { country },
  },
}) => {
  // Access the country object properties here now
  console.log(country);
  return (
    <div>
      <h1> {country.name}</h1>
      
    </div>
  );
};

export default Country;
