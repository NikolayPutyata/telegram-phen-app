import { useSelector } from 'react-redux';
import { transactionFormation } from '../../utils/transactionFormation';
import s from '/src/App.module.css';
import { selectUserId } from '../../redux/selectors';
import { useTonConnectUI } from '@tonconnect/ui-react';

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

const sendTransaction = async () => {
  const transaction = await transactionFormation(userId, collectionId, idItem, parseFloat(price));
  console.log(transaction);
  

  tonConnectUI.sendTransaction(transaction);

};


  return (
    <li className="flex justify-center px-3 gap-7">
      <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
        <img src={imgSrc} alt={title} className="object-cover w-full h-full" />
      </div>

      <div className="flex justify-start flex-col">
        <h3 className={`${s.font} text-zinc-300 mb-3 break-words tracking-wider`}>
          {title}
        </h3>
        <p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>{desc}</p>
        <p className={`${s.font} text-zinc-400 text-sm mb-2 tracking-wider`}>
          {price}
        </p>
        <button className="btn btn-primary w-24 h-9 rounded-4xl" onClick={() => sendTransaction()}>Buy</button>
      </div>
    </li>
  )
};

export default BoostsItem;
