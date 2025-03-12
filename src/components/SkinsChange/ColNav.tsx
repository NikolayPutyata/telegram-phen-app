import { Outlet, NavLink, useLocation } from "react-router-dom"
import s from '/src/App.module.css';

const ColNav = () => {
    const location = useLocation();
    const isDisabled = false;
    
  return (
      <div className="my-7">
          <h2 className={`${s.font} text-zinc-300 tracking-wider ml-4`}>
          Collections ✨
        </h2>
      <div className="my-3 mx-2 flex justify-center">
        <div role="tablist" className="tabs tabs-border">
          <NavLink
            to="/"
            role="tab"
            className={`tab ${s.font} text-[0.55rem] tracking-wider px-3 ${
              location.pathname === "/" ? "tab-active" : ""
            }`}
          >
            Basic
          </NavLink>
          <NavLink
            to="/bronse-col"
            role="tab"
            className={`tab ${s.font} text-[0.55rem] tracking-wider px-3 ${
              location.pathname === "/bronse-col" ? "tab-active" : ""
            } ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
          >
            Bronze
          </NavLink>
          
            <NavLink
            to="/silver-col"
            role="tab"
            className={`tab ${s.font} text-[0.55rem] tracking-wider px-3 ${
              location.pathname === "/silver-col" ? "tab-active" : ""
            } ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
          >
            Silver
          </NavLink>
          <NavLink
            to="/gold-col"
            role="tab"
            className={`tab ${s.font} text-[0.55rem] tracking-wider px-3 ${
              location.pathname === "/gold-col" ? "tab-active" : ""
            } `}
          >
            Gold
          </NavLink>
          <NavLink
            to="/platinum-col"
            role="tab"
            className={`tab ${s.font} text-[0.55rem] tracking-wider px-3 ${
              location.pathname === "/platinum-col" ? "tab-active" : ""
            } ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
          >
            Platinum
          </NavLink>
          <NavLink
            to="/diamond-col"
            role="tab"
            className={`tab ${s.font} text-[0.55rem] tracking-wider px-3 ${
              location.pathname === "/diamond-col" ? "tab-active" : ""
                          } ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
                      
          >
            Diamond
          </NavLink>
          
        </div>
      </div>
  
      <Outlet />
    </div>
  )
}

export default ColNav
