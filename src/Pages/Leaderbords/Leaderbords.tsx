import { NavLink, Outlet, useLocation } from "react-router-dom";
import s from '/src/App.module.css';


const Leaderbords = () => {

  const location = useLocation();

  return (
   <>
      <div className="my-3 ">
        <div role="tablist" className="tabs tabs-border grid grid-cols-3 ">
          <NavLink
            to="/boosts"
            role="tab"
            className={`tab ${s.font} text-[0.7rem] tracking-wider ${
              location.pathname === "/boosts" ? "tab-active" : ""
            }`}
          >
            Cosmo Forge
          </NavLink>
          <NavLink
            to="/boosts/skins"
            role="tab"
            className={`tab ${s.font} text-[0.7rem] tracking-wider ${
              location.pathname === "/boosts/skins" ? "tab-active" : ""
            }`}
          >
            Shuttle Dock
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

