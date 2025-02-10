import { useSelector } from 'react-redux';
import s from '/src/App.module.css';
import { selectUserTokens } from '../../redux/selectors';
import FarmButton from '../FarmButton/FarmButton';

const FarmBlock = () => {
  const tokens = useSelector(selectUserTokens);

  return (
    <div className="my-5">
      <h2 className={`${s.font} text-zinc-300 ml-4 my-4 mt-8`}>
        Farm PHEN Tokens 💰
      </h2>
      <div className="flex flex-col justify-center px-3 my-3 mb-8">
        <div className="flex flex-col px-6 my-4">
          <div className="flex justify-center items-center">
            <span className={`${s.font} text-zinc-400 text-3xl`}>{tokens}</span>
          </div>
        </div>
        <FarmButton />
      </div>
    </div>
  );
};

export default FarmBlock;
