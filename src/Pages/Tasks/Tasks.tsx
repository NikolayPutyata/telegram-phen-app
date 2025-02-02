import { NavLink, Outlet, useLocation } from "react-router-dom";

const Tasks = () => {
  const location = useLocation();
  
  return (
    <>
      <div className="my-3">
        <div role="tablist" className="tabs tabs-border">
          <NavLink
            to="/tasks"
            role="tab"
            className={`tab ${
              location.pathname === "/tasks" ? "tab-active" : ""
            }`}
          >
            Tasks
          </NavLink>
          <NavLink
            to="/tasks/friends"
            role="tab"
            className={`tab ${
              location.pathname === "/tasks/friends" ? "tab-active" : ""
            }`}
          >
            Friends
          </NavLink>
        </div>
      </div>
  
      <Outlet />
    </>
  );
};

export default Tasks;
