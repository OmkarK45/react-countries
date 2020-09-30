import React from "react";

const Table = ({ data }) => {
  console.log(data);
  return (
    <React.Fragment>
      <table className="table-auto">
        <tbody>
          <tr>
            <td className="border px-4 py-2">Capital of {data.name}</td>
            <td className="border px-4 py-2">{data.capital}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">Currencies</td>
            <td className="border px-4 py-2">
              {data.currencies.map((c, i) => (
                <li style={{ listStyle: "none" }} key={i}>
                  {c.name} ({c.symbol})
                </li>
              ))}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Area</td>
            <td className="border px-4 py-2">
              {data.area} Total km <sup>2</sup>
            </td>
          </tr>

          <tr>
            <td className="border px-4 py-2">Borders surrounded</td>
            <td className="border px-4 py-2">{data.borders.map((b,i)=>(
                <li key={i}>{b}</li>
            ))}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">Languages Spoken</td>
            <td className="border px-4 py-2">
              {data.languages.map((l,i)=>(
                  <li key={i}>{l.name}</li>
              ))}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Population</td>
            <td className="border px-4 py-2">
              {data.population}
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
