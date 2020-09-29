import React, { useState, useEffect } from "react";
import { getCountries } from "./../services/CountryService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Country from './Country';

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
      .catch((err) => toast('Some Error Occured'));
  }
  const notify = ()=> toast('Wow so easy')
  
  return (
    
    <div>
      <h1>SHowing list of all countries</h1>
      <button onClick={notify}>Click me</button>
      <ToastContainer />

      {data && (
        <div>
          {data.map((country) => (
            // <li key={country.alpha2Code}>{country.name}</li>
            <Country data={country}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Coutries;