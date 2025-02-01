import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <div className="dock bg-neutral text-neutral-content rounded-tl-4xl rounded-tr-4xl pb-safe-bottom">
      <Link to={'/'} className={location.pathname === '/' ? 'dock-active' : ''}>
        <img src="/assets/home.svg" alt="" width={24}/>
        <span className="dock-label">Home</span>
      </Link>

      <Link
        to={'/boosts'}
        className={location.pathname === '/boosts' ? 'dock-active' : ''}
      >
        <img src="/assets/boost.svg" alt="" width={26}/>
        <span className="dock-label">Boosts</span>
      </Link>

      <Link
        to={'/tasks'}
        className={location.pathname === '/tasks' ? 'dock-active' : ''}
      >
        <img src="/assets/tasks.svg" alt="" width={25}/>
        <span className="dock-label">Tasks</span>
      </Link>

      <Link
        to={'/profile'}
        className={location.pathname === '/profile' ? 'dock-active' : ''}
      >
        <img src="/assets/profile.svg" alt="" width={20}/>
        <span className="dock-label mt-1">Profile</span>
      </Link>
    </div>
  );
};

export default Footer;
