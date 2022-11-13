import './css/Home.css';
import { Routes, Route } from 'react-router-dom';
import CountriesList from '../template/CountriesList';
import Error from '../template/Error';
import CountryDetails from '../template/CountryDetails';
import countries from './../../countries.json';
import { useState } from 'react';
import React from 'react';

function Home() {
  const [allCountries, setCountries] = useState(countries);
  return (
    <div className="Home">
      <Routes>
        <Route
          path="/"
          element={<CountriesList allCountries={allCountries} />}
        />

        <Route
          path="/countrie/:countrieID"
          element={<CountryDetails allCountries={allCountries} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Home;
