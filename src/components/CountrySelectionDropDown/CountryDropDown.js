import React, { useState } from "react";
import "./style.css";

const CountryDropdown = ({ countries, preSelectedCountryId }) => {
  const [selectedCountry, setSelectedCountry] = useState(
    preSelectedCountryId || null
  );

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const getSelectedCountryStates = () => {
    return (
      countries.find((country) => country.country_id === selectedCountry)
        ?.states || []
    );
  };

  return (
    <div className="dropdown-container">
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="dropdown"
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.country_id} value={country.country_id}>
            {country.country_name}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <div className="state-display">
          <h3>Selected Country: </h3>
          {
            countries.find((country) => country.country_id === selectedCountry)
              ?.country_name
          }
          <br />
          <div className="states">
            <h3>States: </h3>
            {getSelectedCountryStates().map((state) => (
              <div key={state.state_id}>{state.state_name}, </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
