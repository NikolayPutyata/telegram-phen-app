import { useSelector } from 'react-redux';
import s from '/src/App.module.css';
import { selectUserId } from '../../redux/selectors';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { transactionFormation } from '../../utils/transactionFormation';

type BoostsItemProps = {
  imgSrc: string;
  title: string;
  desc: string;
  price: string;
  collectionId: number;
  idItem: number;
};

const BoostsItem: React.FC<BoostsItemProps> = ({
  imgSrc,
  title,
  desc,
  price,
  collectionId,
  idItem
}) => {
  const userId = useSelector(selectUserId);
  const [tonConnectUI] = useTonConnectUI();

  const sendTransactionFu = async () => {
    const transaction = await transactionFormation(userId, collectionId, idItem, parseFloat(price));

    tonConnectUI.sendTransaction(transaction);
    

  };

  return (
    <li className="flex px-3  justify-start gap-8">
      <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
        <img src={imgSrc} alt="standart avatar" />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className={`${s.font} text-zinc-300  break-words`}>
         {title}
        </h3>
        <p className={`${s.font} text-zinc-400 text-xs mt-1`}>{desc}</p>
        <div className="flex items-center gap-1.5 mt-1">

          <p className={`${s.font} text-zinc-300 text-sm`}>{price}</p>
          <img src="/assets/ton.svg" alt="telegram-star" width={16}/>
        </div>
        <button className="btn btn-primary w-24 h-8 rounded-4xl mt-1" onClick={() => sendTransactionFu()}>Buy</button>
      </div>
    </li>
  );
};

export default BoostsItem;

