import { useSelector } from 'react-redux';
import { selectUserTokens } from '../../redux/selectors';
import s from '/src/App.module.css';
import { useTranslation } from 'react-i18next';
import PhenTonIcon from './PhenTonIcon';

const Header = () => {
  const tokens = useSelector(selectUserTokens);
  const { t } = useTranslation();



  return (
    <div className="collapse rounded-tl-none rounded-tr-none bg-neutral rounded-b-3xl p-0.5">
      <input type="checkbox" />
      <div className="collapse-title font-semibold flex justify-between items-center px-5">
        <p className={`${s.font}  text-zinc-400 text-sm tracking-wider`}>{t('PHENERIUM')}</p>
        <PhenTonIcon />
      </div>
      <div className="collapse-content text-sm">
        <ul className="flex flex-col gap-3">
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/assets/Group 61.png"
                alt="Phenerium"
                width={'22px'}
                height={'20px'}
              />
              <p className={`${s.font} text-zinc-300 text-sm`}>$PHEN</p>
            </div>
            <span className={`${s.font} text-zinc-300 text-sm`}>{tokens}</span>
          </li>
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/assets/ton_symbol.png"
                alt="Ton"
                width={'23px'}
                height={'20px'}
              />
              <p className={`${s.font} text-zinc-300 text-sm`}>$TON</p>
            </div>
            <span className={`${s.font} text-zinc-300 text-sm`}>400</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
