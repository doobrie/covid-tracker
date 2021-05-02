import React from "react";
import "./CountrySelector.css";
import { useEffect } from "react";

function CountrySelector(props) {
  useEffect(() => {}, [props]);

  function handleChange(event) {
    let selectedIndex = event.target.options.selectedIndex;
    let countryId = event.target.options[selectedIndex].value;
    props.onChange(countryId);
  }
  return (
    <div>
      <select onChange={handleChange}>
        <option key="global" value="global">
          Global
        </option>
        {props.data.Countries &&
          props.data.Countries.map((country) => (
            <option key={country.ID} value={country.ID}>
              {country.Country}
            </option>
          ))}
      </select>
    </div>
  );
}

export default CountrySelector;
