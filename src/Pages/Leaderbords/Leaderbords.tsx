import { NavLink, Outlet, useLocation } from "react-router-dom";


const Leaderbords = () => {

  const location = useLocation();

  return (
   <>
      <div className="my-3">
        <div role="tablist" className="tabs tabs-border">
          <NavLink
            to="/boosts"
            role="tab"
            className={`tab ${
              location.pathname === "/boosts" ? "tab-active" : ""
            }`}
          >
            Boosts
          </NavLink>
          <NavLink
            to="/boosts/skins"
            role="tab"
            className={`tab ${
              location.pathname === "/boosts/skins" ? "tab-active" : ""
            }`}
          >
            Skins
          </NavLink>
          <NavLink
            to="/boosts/special"
            role="tab"
            className={`tab ${
              location.pathname === "/boosts/special" ? "tab-active" : ""
            }`}
          >
            Special
          </NavLink>
        </div>
      </div>
  
      <Outlet />
    </>
  )
}

export default Leaderbords

