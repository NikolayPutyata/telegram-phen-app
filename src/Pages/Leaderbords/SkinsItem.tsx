import { useState } from 'react';
import s from '/src/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { paymentInPhenerium } from '../../redux/operations';
import { selectUserId } from '../../redux/selectors';
import { ClipLoader } from 'react-spinners';

interface SkinsItemProps {
  id: number;
  name: string;
  imageUrlSmall: string;
  price: string;
}

function SkinsItem({ imageUrlSmall, price, name, id }: SkinsItemProps) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector(selectUserId);

  const handeBuyInPhenerium = async (
    amount: number,
    idItem: number,
    collectionId: number,
  ) => {
    setIsLoading(true);
    const memo = `ORDER_${userId}_${collectionId}_${idItem}`;
    await dispatch(paymentInPhenerium({ memo, amount }));
    setIsLoading(false);
  };

  return (
    <li className="flex px-3 justify-start gap-6">
      <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
        <img src={imageUrlSmall} alt="standart avatar" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className={`${s.font} text-zinc-300 break-words`}>{name}</h3>

        {/* <div className="mt-1 flex gap-1 items-center">
          <p className={`${s.font} text-zinc-400 text-xs`}>+ {bonus}</p>
          <span>
            <img src="/assets/Group61.png" alt="telegram-star" width={12} />
          </span>
        </div> */}
        <div className="flex items-center gap-1.5 mt-1">
          <p className={`${s.font} text-zinc-300 text-sm`}>{price}</p>
          <img src="/assets/Group61.png" alt="telegram-star" width={16} />
        </div>

        <button
          className="btn btn-primary w-24 h-8 rounded-4xl mt-1 bg-gradient-to-r from-blue-500 to-purple-500"
          onClick={() => handeBuyInPhenerium(Number(price), id, 1)}
          disabled={isLoading}
        >
          {isLoading ? <ClipLoader size={17} color={'#ededed'} /> : 'Buy'}
        </button>
      </div>
    </li>
  );
}

export default SkinsItem;
