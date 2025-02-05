import { useSelector } from 'react-redux';
import { selectUserTokens } from '../../redux/selectors';
import s from '/src/App.module.css';

const Header = () => {

  const tokens = useSelector(selectUserTokens);

  return (
    <div className="collapse rounded-tl-none rounded-tr-none bg-neutral rounded-b-3xl p-0.5">
      <input type="checkbox" />
      <div className="collapse-title font-semibold flex justify-between items-center px-5">
        <p className={`${s.font} text-zinc-400 text-sm`}>Your address</p>
        <div className="flex items-center gap-4">
          <span className={`${s.font} text-zinc-400 text-sm`}>$0</span>
          <img
            src="/assets/Group 60.png"
            alt="coins"
            width={'50px'}
            height={'40px'}
          />
          <span className="w-2.5">
            <svg
              viewBox="0 0 10 10"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.50865 2.67554C8.34023 2.67554 8.17181 2.73958 8.0433 2.86809L4.99988 5.91195L1.95645 2.86809C1.69943 2.61151 1.28277 2.61151 1.02575 2.86809C0.769168 3.1251 0.769168 3.54177 1.02575 3.79879L4.53452 7.30757C4.79154 7.56414 5.20821 7.56414 5.46523 7.30757L8.974 3.79879C9.23058 3.54177 9.23058 3.1251 8.974 2.86809C8.8455 2.73958 8.67707 2.67554 8.50865 2.67554Z"
                fill="white"
                fillOpacity="0.5"
              ></path>
            </svg>
          </span>
        </div>
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
              <p>$PHEN</p>
            </div>
            <span>{tokens}</span>
          </li>
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/assets/ton_symbol.png"
                alt="Ton"
                width={'23px'}
                height={'20px'}
              />
              <p>$TON</p>
            </div>
            <span>400</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
