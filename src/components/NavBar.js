import React from "react";
import { NavLink } from "react-router-dom";

//`http://www.omdbapi.com/?s=life&apikey=40c04f88`

export default function NavBar() {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/" exact>
        Home
      </NavLink>
      {" - "}

      <NavLink activeStyle={{ fontWeight: "bold" }} to="/about">
        About
      </NavLink>
      {" - "}

      <NavLink activeStyle={{ fontWeight: "bold" }} to="/discover">
        Discover
      </NavLink>
    </div>
  );
}
