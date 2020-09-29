import React, { useState, useEffect } from "react";
import { getCountries } from "./../services/CountryService";

const Coutries = (props) => {
  const [data, setData] = useState()
  useEffect(()=>{
    fetchData()
  },[])
  async function fetchData(){
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    res.json()
    .then(res=>{
      setData(res)
      console.log(res);
      console.log(data);
    })
    .catch(err=>console.log(err))
  }
  
  return (
    <div>
      <h1>SHowing list of all countries</h1>
      {data && 
      (
      <div>{data.map(country=>(
      <li key={country.alpha2Code}>{country.name}</li>
      ))}</div>
      )
      }
    </div>
  );
};

export default Coutries;
