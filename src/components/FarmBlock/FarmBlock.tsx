import { useSelector } from 'react-redux';
import { useState } from 'react';
import s from '/src/App.module.css';
import {
  selectUserTokens,
  selectUserActiveBoosts,
  selectFarmingCycle,
} from '../../redux/selectors';
import FarmButton from '../FarmButton/FarmButton';
import ActiveBoosts from '../ActiveBoosts/ActiveBoosts';
import AddBoosts from '../AddBoosts/AddBoosts';
import { useTranslation } from 'react-i18next';

const FarmBlock = () => {
  const tokens = useSelector(selectUserTokens);
  const activeBoosts = useSelector(selectUserActiveBoosts);
  const [isAddBoostsDisabled, setIsAddBoostsDisabled] = useState(false);
  const farmingCycle = useSelector(selectFarmingCycle);

  const { t } = useTranslation();

  const handleFarmStatusChange = (isFarmDisabled: boolean) => {
    setIsAddBoostsDisabled(isFarmDisabled);
  };

  return (
    <div className="my-5">
      <div className='flex justify-between mx-4 my-4 mt-8 '>
        <h2 className={`${s.font} text-zinc-300 tracking-wider`}>
        {t('Farm tokens')} 💰
      </h2>
      <h2 className={`${s.font} text-zinc-400 tracking-wider`}>🕖 {farmingCycle} h.</h2>
      </div>
      <div className="flex flex-col justify-center px-3 my-3 mb-8">
        <div className="flex flex-col px-6 my-4">
          <div className="flex justify-center items-center">
            <span className={`${s.font} text-zinc-300 text-3xl`}>{tokens}</span>
          </div>
        </div>
        <FarmButton onFarmStatusChange={handleFarmStatusChange} />
        <ActiveBoosts activeBoosts={activeBoosts} />
        <AddBoosts isAddBoostsDisabled={isAddBoostsDisabled} />
      </div>
    </div>
  );
};

export default FarmBlock;
