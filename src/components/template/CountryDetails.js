import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './css/Home.css';

function CountryDetails({ allCountries }) {
  const { countrieID } = useParams();
  const countrieSelected = allCountries.find((countrie) => {
    return countrie.alpha3Code === countrieID;
  });

  return (
    <div className="detalhes">
      <h1>{countrieSelected.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{countrieSelected.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countrieSelected.area} km
              <sup>2</sup>
            </td>
          </tr>
          {countrieSelected.borders.map((border) => {
            const pais = allCountries.find((countrie) => {
              return countrie.alpha3Code === border;
            });
            return (
              <tr>
                <td>Bandeira</td>
                <td>
                  <ul>
                    <li>
                      <Link to={`/countrie/${border}`}>{pais.name.common}</Link>
                    </li>
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
