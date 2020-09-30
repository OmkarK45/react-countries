import React, { useState, useEffect } from "react";
import { getCountries } from "./../services/CountryService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Country from "./Country";
import { Link } from "react-router-dom";
import Card from "./Card";

const Coutries = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    res
      .json()
      .then((res) => {
        setData(res);
        console.log(res);
        console.log(data);
      })
      .catch((err) => toast("Some Error Occured"));
  }

  return (
    <React.Fragment>
      <div>
        <h1 className='allCountries-title'>List of all countries</h1>
      </div>
      <div className='list-wrapper'>
        {data &&
          data.map((country) => (
            <Card key={country.alpha2Code} country={country} />
          ))}
      </div>
    </React.Fragment>
  );
};

export default Coutries;
