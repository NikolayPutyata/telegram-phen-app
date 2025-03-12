import { Outlet, NavLink, useLocation } from "react-router-dom"
import s from '/src/App.module.css';

const ColNav = () => {
    const location = useLocation();
    const isDisabled = true;
    
  return (
    <>
      <div className="my-3 mx-2">
        <div role="tablist" className="tabs tabs-border">
          <NavLink
            to="/"
            role="tab"
            className={`tab ${s.font} text-[0.6rem] tracking-wider ${
              location.pathname === "/" ? "tab-active" : ""
            }`}
          >
            Common
          </NavLink>
          <NavLink
            to="/bronse-col"
            role="tab"
            className={`tab ${s.font} text-[0.6rem] tracking-wider ${
              location.pathname === "/bronse-col" ? "tab-active" : ""
            } ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
          >
            Bronse
          </NavLink>
          
            <NavLink
            to="/silver-col"
            role="tab"
            className={`tab ${s.font} text-[0.6rem] tracking-wider ${
              location.pathname === "/silver-col" ? "tab-active" : ""
            } ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
          >
            Silver
          </NavLink>
          <NavLink
            to="/gold-col"
            role="tab"
            className={`tab ${s.font} text-[0.6rem] tracking-wider ${
              location.pathname === "/gold-col" ? "tab-active" : ""
            } `}
          >
            Gold
          </NavLink>
          <NavLink
            to="/platinum-col"
            role="tab"
            className={`tab ${s.font} text-[0.6rem] tracking-wider ${
              location.pathname === "/platinum-col" ? "tab-active" : ""
            } ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
          >
            Platinum
          </NavLink>
          <NavLink
            to="/diamond-col"
            role="tab"
            className={`tab ${s.font} text-[0.6rem] tracking-wider ${
              location.pathname === "/diamond-col" ? "tab-active" : ""
                          } ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
                      
          >
            Diamond
          </NavLink>
          
        </div>
      </div>
  
      <Outlet />
    </>
  )
}

export default ColNav
