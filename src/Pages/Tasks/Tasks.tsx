import { NavLink, Outlet, useLocation } from 'react-router-dom';
import s from '/src/App.module.css';

const Tasks = () => {
  const location = useLocation();

  return (
    <>
      <div className="my-3">
        <div role="tablist" className="tabs tabs-border grid grid-cols-2">
          <NavLink
            to="/tasks"
            role="tab"
            className={`tab ${s.font} text-[0.7rem] tracking-wider ${
              location.pathname === '/tasks' ? 'tab-active' : ''
            }`}
          >
            Tasks
          </NavLink>
          <NavLink
            to="/tasks/friends"
            role="tab"
            className={`tab ${s.font} text-[0.7rem] tracking-wider ${
              location.pathname === '/tasks/friends' ? 'tab-active' : ''
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
