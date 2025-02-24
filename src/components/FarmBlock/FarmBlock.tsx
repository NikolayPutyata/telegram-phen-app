import { useSelector } from 'react-redux';
import { useState } from 'react';
import s from '/src/App.module.css';
import {
  selectUserTokens,
  selectUserActiveBoosts,
} from '../../redux/selectors';
import FarmButton from '../FarmButton/FarmButton';
import ActiveBoosts from '../ActiveBoosts/ActiveBoosts';
import AddBoosts from '../AddBoosts/AddBoosts';
import { useTranslation } from 'react-i18next';

const FarmBlock = () => {
  const tokens = useSelector(selectUserTokens);
  const activeBoosts = useSelector(selectUserActiveBoosts);
  const [isAddBoostsDisabled, setIsAddBoostsDisabled] = useState(false);

  const { t } = useTranslation();

  const handleFarmStatusChange = (isFarmDisabled: boolean) => {
    setIsAddBoostsDisabled(isFarmDisabled);
  };

  return (
    <div className="my-5">
      <h2 className={`${s.font} text-zinc-300 ml-4 my-4 mt-8`}>
        {t('Farm PHEN Tokens')} 💰
      </h2>
      <div className="flex flex-col justify-center px-3 my-3 mb-8">
        <div className="flex flex-col px-6 my-4">
          <div className="flex justify-center items-center">
            <span className={`${s.font} text-zinc-400 text-3xl`}>{tokens}</span>
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
