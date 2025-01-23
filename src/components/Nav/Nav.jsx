import { NavLink } from "react-router-dom";
import style from "./nav.module.css";

export default function Nav() {
  return (
    <div
      style={{
        marginLeft: "50px",
        marginRight: "50px",
        marginTop: "10px",
        height: "500px",
      }}
    >
      <nav className="flex justify-between items-center">
        <img src="logo.svg" alt="" style={{ width: "50px" }} />
        <div className="flex">
          <NavLink className={`bg-black ${style.btnNav}`} to={"/"}>
            Home
          </NavLink>
          <NavLink
            className={`${style.btnNav}`}
            to={"/about"}
            style={{ marginLeft: "1rem" }}
          >
            About
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
