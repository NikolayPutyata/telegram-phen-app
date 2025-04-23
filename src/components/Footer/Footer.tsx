import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="dock bg-neutral text-neutral-content rounded-tl-4xl rounded-tr-4xl">
      <Link to={'/'} className={location.pathname === '/' ? 'dock-active' : ''}>
        <img src="/assets/home.svg" alt="" width={24} />
        <span className="dock-label">{t('Home')}</span>
      </Link>

      <Link
        to={'/boosts'}
        className={location.pathname === '/boosts' ? 'dock-active' : ''}
      >
        <img src="/assets/boost.svg" alt="" width={26} />
        <span className="dock-label">{t('Boosts')}</span>
      </Link>

      <Link
        to={'/game'}
        className={location.pathname === '/game' ? 'dock-active' : ''}
      >
        <img src="/assets/planet-svgrepo-com.svg" alt="" width={26} />
        <span className="dock-label">{t('Game')}</span>
      </Link>
      <Link
        to={'/tasks'}
        className={location.pathname === '/tasks' ? 'dock-active' : ''}
      >
        <img src="/assets/tasks.svg" alt="" width={25} />
        <span className="dock-label">{t('Tasks')}</span>
      </Link>

      <Link
        to={'/profile'}
        className={location.pathname === '/profile' ? 'dock-active' : ''}
      >
        <img src="/assets/profile.svg" alt="" width={20} />
        <span className="dock-label mt-1">{t('Profile')}</span>
      </Link>
    </div>
  );
};

export default Footer;
