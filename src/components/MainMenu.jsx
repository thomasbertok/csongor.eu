import React, { useState, useEffect } from "react";

const MainMenu = (props) => {
  const { activePage, setActivePage, open, setOpen } = props;
  const [activeMenuItem, setActiveMenuItem] = useState(activePage);

  // change on activePage updates active menuItem
  useEffect(() => {
    setActiveMenuItem(activePage);
  }, [activePage]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  // click on link updates activePage value
  const handleLinkClick = (e) => {
    e.preventDefault();
    setActiveMenuItem(e.target.id);
    setActivePage(e.target.id);
    setOpen(false);
  };

  const isActiveMenuItem = (item) => {
    return item === activePage ? "active" : "";
  };

  return (
    <>
      <div className={`main-nav-toggle cursor-pointer ${open ? "open" : ""}`} id="nav-toggle" onClick={toggleMenu}>
        <span></span>
      </div>

      <nav className={`main-navigation ${open ? "main-menu-open" : "hidden"}`}>
        <ul>
          <li>
            <a className={isActiveMenuItem(0)} href="#home" id="0" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a className={isActiveMenuItem(1)} href="#portfolio" id="1" onClick={handleLinkClick}>
              Portfolio
            </a>
          </li>
          <li>
            <a className={isActiveMenuItem(2)} href="#about" id="2" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a className={isActiveMenuItem(3)} href="#contact" id="3" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainMenu;
