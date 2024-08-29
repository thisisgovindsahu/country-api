import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital, country }) => {
  return (
    <>
      <Link
        className="country-card"
        to={`/${name}`}
        state={{ name, flag, population, region, capital, country }}>
        <div className="flag-container"><img src={flag} alt={name + " Flag"} /></div>
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: </b>
            {population.toLocaleString("en-IN")}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </Link>
    </>
  );
};

export default CountryCard;
