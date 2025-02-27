import { useSelector } from 'react-redux';
import s from '/src/App.module.css';
import { selectUserId } from '../../redux/selectors';
import { createStarInvoice } from '../../utils/createStarInvoice';

type BoostsItemProps = {
  boost_photo_url: string;
  name: string;
  desc: string;
  price: string;
  collectionId: number;
  idItem: number;
  boost_bonus: number;
};

      
const BoostsItem: React.FC<BoostsItemProps> = ({
  boost_photo_url,
  name,
  desc,
  price,
  collectionId,
  boost_bonus,
  idItem
}) => {
  const userId = useSelector(selectUserId);
  // const [tonConnectUI] = useTonConnectUI();

  // const sendTransactionFu = async () => {
    // const transaction = await transactionFormation(userId, collectionId, idItem, parseFloat(price));

    // tonConnectUI.sendTransaction(transaction);
    

  // };

    const handleBuyClick = async () => {
  
      const invoiceLink = await createStarInvoice({
        title: name,
        description: desc,
        prices: [{ label: 'Price', amount: Number(price) }],
        currency: "XTR",
        provider_token: '',
        payload: `ORDER_${userId}_${collectionId}_${idItem}`,
      });
  
      window.Telegram.WebApp.openInvoice(invoiceLink, (status) => {
        if (status === 'paid') {
          alert('Спасибо за покупку!');
        } else if (status === 'cancelled') {
          alert('Оплата отменена');
        } else if (status === 'failed') {
          alert('Ошибка оплаты');
        }
      });
  
     
    
  };

  return (
    <li className="flex px-3 justify-start gap-6">
      <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
        <img src={boost_photo_url} alt="boost avatar" />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className={`${s.font} text-zinc-300 break-words tracking-wider`}>{name}</h3>
        <p className={`${s.font} text-zinc-400 text-sm mt-1`}>{desc}</p>
        <div className="flex items-center gap-1.5 mt-1">
          <p className={`${s.font} text-zinc-300 text-sm`}>{price}</p>
          <p className="hidden">{boost_bonus}</p>
          <img src="/assets/telegram_star.svg" alt="telegram-star" />
        </div>
        <button
          className="btn btn-primary w-24 h-8 rounded-4xl mt-1 bg-gradient-to-r from-blue-500 to-purple-500"
          onClick={handleBuyClick}
        >
          Buy
        </button>
      </div>
    </li>
  );
};

export default BoostsItem;

