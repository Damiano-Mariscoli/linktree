import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <img src="logo.svg" alt="" style={{ width: "50px" }} />
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
