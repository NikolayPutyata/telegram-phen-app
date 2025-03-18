import { useSelector } from 'react-redux';
import { selectUserTokens, selectUserTonBalance } from '../../redux/selectors';
import s from '/src/App.module.css';
import PhenTonIcon from './PhenTonIcon';
import { useTonAddress } from '@tonconnect/ui-react';
import { sliceWalletAddress } from '../../utils/sliceWalletAddress';

const Header = () => {
  const tokens = useSelector(selectUserTokens);
  const userFriendlyAddress = useTonAddress();
  const tonBalance = useSelector(selectUserTonBalance);

  return (
    <div className="collapse rounded-tl-none rounded-tr-none bg-neutral rounded-b-3xl p-0.5">
      <input type="checkbox" />
      <div className="collapse-title font-semibold flex justify-between items-center px-5">
        <div className={`${s.font} text-zinc-400 text-sm tracking-wider`}>
          {userFriendlyAddress ? (
            sliceWalletAddress(userFriendlyAddress)
          ) : (
            <div className="flex items-center gap-2">
              <img src="/assets/Group_66.png" className="w-10" />
              <p className={`${s.font}  text-zinc-400 text-sm tracking-wider`}>
                PHENERIUM
              </p>
            </div>
          )}
        </div>
        <PhenTonIcon />
      </div>
      <div className="collapse-content text-sm">
        <ul className="flex flex-col gap-3">
          <li className="flex justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/assets/Group61.png"
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
            <span className={`${s.font} text-zinc-300 text-sm`}>
              {tonBalance}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
