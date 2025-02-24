import { NavLink, Outlet, useLocation } from "react-router-dom";
import s from '/src/App.module.css';


const Leaderbords = () => {

  const location = useLocation();

  return (
   <>
      <div className="my-3">
        <div role="tablist" className="tabs tabs-border">
          <NavLink
            to="/boosts"
            role="tab"
            className={`tab ${s.font} text-[0.7rem] tracking-wider ${
              location.pathname === "/boosts" ? "tab-active" : ""
            }`}
          >
            Boosts
          </NavLink>
          <NavLink
            to="/boosts/skins"
            role="tab"
            className={`tab ${s.font} text-[0.7rem] tracking-wider ${
              location.pathname === "/boosts/skins" ? "tab-active" : ""
            }`}
          >
            Skins
          </NavLink>
          <NavLink
            to="/boosts/special"
            role="tab"
            className={`tab ${s.font} text-[0.7rem] tracking-wider ${
              location.pathname === "/boosts/special" ? "tab-active" : ""
            }`}
          >
            Warehouse
          </NavLink>
        </div>
      </div>
  
      <Outlet />
    </>
  )
}

export default Leaderbords

