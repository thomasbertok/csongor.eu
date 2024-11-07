import React from "react";
import Logo from "../assets/img/tsngr-logo.svg";

export default function Header() {
  return (
    <header className="main-header">
      <a href="/" className="flex items-center">
        <img src={Logo} alt="" className="logo" />
      </a>
    </header>
  );
}
