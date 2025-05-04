import { useState } from 'react';
import s from '/src/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { selectUserId } from '../../redux/selectors';
import { ClipLoader } from 'react-spinners';
import { buySkinInPhenerium } from '../../redux/operations';

interface SkinsItemProps {
  id: number;
  name: string;
  imageUrlSmall: string;
  price: string;
  colId: number;
  index: number;
}

function SkinsItem({
  imageUrlSmall,
  price,
  name,
  colId,
  index,
}: SkinsItemProps) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector(selectUserId);

  const handeBuyInPhenerium = async (
    amount: number,
    index: number,
    colId: number,
  ) => {
    setIsLoading(true);
    const memo = `ORDER_${userId}_${colId}_${index}`;
    await dispatch(buySkinInPhenerium({ memo, amount }));
    setIsLoading(false);
  };

  return (
    <li className="flex px-3 justify-start gap-6">
      <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
        <img src={imageUrlSmall} alt="standart avatar" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className={`${s.font} text-zinc-300 break-words`}>{name}</h3>
        <div className="flex items-center gap-1.5 mt-1">
          <p className={`${s.font} text-zinc-300 text-sm`}>{price}</p>
          <img src="/assets/Group61.png" alt="telegram-star" width={16} />
        </div>

        <button
          className="btn btn-primary w-24 h-8 rounded-4xl mt-1 bg-gradient-to-r from-blue-500 to-purple-500"
          onClick={() => handeBuyInPhenerium(Number(price), index, colId)}
          disabled={isLoading}
        >
          {isLoading ? <ClipLoader size={17} color={'#ededed'} /> : 'Buy'}
        </button>
      </div>
    </li>
  );
}

export default SkinsItem;
