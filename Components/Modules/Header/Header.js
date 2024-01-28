import React from "react";
import Navbar from "../Navbar/Navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Header({children}) {
  return (
    <header>
      <Navbar/>
      {children}
    </header>
  );
}
