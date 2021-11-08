import React from "react";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <div>
      <nav>
        <ul className="navMenu">
          <li className="navLink">
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/concerts">Concerts</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/foote-notes">Foote Notes</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/outreach">Outreach</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/photos">Photos</NavLink>
          </li>
          <li className="navLink">
            <NavLink to="/symphony">Symphony</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;
