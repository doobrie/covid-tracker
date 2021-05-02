import React from "react";
import "./Header.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

function Header() {
  return (
    <div className="header">
      <div>
        <FontAwesomeIcon icon={"viruses"} />
        Covid-19 Tracker
      </div>
      <p>
        API by <a href="https://covid19api.com">covid19api.com</a>
      </p>
    </div>
  );
}

export default Header;
