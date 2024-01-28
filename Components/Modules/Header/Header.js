import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Header({ children }) {
  return (
    <header>
      <Navbar />
      {children}
    </header>
  );
}
