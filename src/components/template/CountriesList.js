import 'bootstrap/dist/css/bootstrap.css';
import React, { Fragment } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function CountriesList({ allCountries }) {
  /* <p>
        <Link to="/about">About Page LINK</Link>
      </p> */

  return (
    <div className="container">
      {allCountries.map((countrie) => {
        return (
          <div key={countrie.alpha3Code} className="row">
            <div>
              <div>
                <Link to={`/countrie/${countrie.alpha3Code}`}>
                  {countrie.name.official}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
