import React from "react";
import data from "./data/countries";
import CountryDropdown from "./components/CountrySelectionDropDown/CountryDropDown";

const App = () => {
  const myCountries = data;

  return (
    <div>
      <CountryDropdown countries={myCountries} />
    </div>
  );
};

export default App;
