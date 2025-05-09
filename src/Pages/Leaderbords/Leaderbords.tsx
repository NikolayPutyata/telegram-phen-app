import { NavLink, Outlet, useLocation } from 'react-router-dom';
import s from '/src/App.module.css';
import { useTranslation } from 'react-i18next';

const Leaderbords = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <>
      <div className="my-3 ">
        <div role="tablist" className="tabs tabs-border grid grid-cols-3 ">
          <NavLink
            to="/boosts"
            role="tab"
            className={`tab ${s.font} text-[0.7rem] tracking-wider ${
              location.pathname === '/boosts' ? 'tab-active' : ''
            }`}
          >
            {t('Cosmo Forge')}
          </NavLink>
          <NavLink
            to="/boosts/skins"
            role="tab"
            className={`tab ${s.font} text-[0.7rem] tracking-wider ${
              location.pathname === '/boosts/skins' ? 'tab-active' : ''
            }`}
          >
            {t('Shuttle Dock')}
          </NavLink>
          <NavLink
            to="/boosts/special"
            role="tab"
            className={`tab ${s.font} text-[0.7rem] tracking-wider ${
              location.pathname === '/boosts/special' ? 'tab-active' : ''
            }`}
          >
            {t('Warehouse')}
          </NavLink>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Leaderbords;
