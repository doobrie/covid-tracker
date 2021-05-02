import "./App.css";
import Header from "./Header";
import CountrySelector from "./CountrySelector";
import Information from "./Information";
import Location from "./Location";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [statistics, setStatistics] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    async function init() {
      const res = await fetch("https://api.covid19api.com/summary");
      const jsonData = await res.json();
      setStatistics(jsonData);
    }

    init();
  }, []);

  function handleChange(countryId) {
    let result = statistics.Countries.find(
      (country) => country.ID === countryId
    );

    if (result === undefined) {
      result = {
        NewConfirmed: statistics.Global.NewConfirmed,
        TotalConfirmed: statistics.Global.TotalConfirmed,
        NewDeaths: statistics.Global.NewDeaths,
        TotalDeaths: statistics.Global.TotalDeaths,
        Country: "Global",
        Date: statistics.Global.Date,
      };
    }
    setCountry(result);
  }

  return (
    <div className="App">
      <Header></Header>
      <Location location={country} />
      <div class="information-container">
        <Information
          title="Cases"
          new={country.NewConfirmed}
          total={country.TotalConfirmed}
        />
        <Information
          title="Deaths"
          new={country.NewDeaths}
          total={country.TotalDeaths}
        />
      </div>
      <CountrySelector data={statistics} onChange={handleChange} />
    </div>
  );
}

export default App;
