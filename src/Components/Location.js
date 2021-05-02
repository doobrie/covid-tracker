import React from "react";
import "./Location.css";

function Location(props) {
  console.log(props);
  return (
    <div>
      <h3 class="location-header">{props.location.Country}</h3>
      {props.location.Date !== undefined && (
        <p class="location-date">{new Date(props.location.Date).toString()}</p>
      )}
    </div>
  );
}

export default Location;
