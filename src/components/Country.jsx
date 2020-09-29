import React from "react";

const Country = (props) => {
  // Access the country object properties here now
console.log(props);
return <h1>{props.location.state.name} </h1>;
};

export default Country;
