
import { useSelector } from 'react-redux';
import { createStarInvoice } from '../../utils/createStarInvoice';
import s from '/src/App.module.css';
import {  selectUserId } from '../../redux/selectors';

interface SpecialRobotItemProps {
  id: number;
  title: string;
  imageUrl: string;
  price: string;
  description: string;
  collectionId: number;
  showBuyButton: boolean | undefined;
}

function SpecialRobotItem({ title, imageUrl, price, id, description, collectionId, showBuyButton }: SpecialRobotItemProps) {

  const userId = useSelector(selectUserId);


  const handleBuyClick = async () => {

    const invoiceLink = await createStarInvoice({
      title: title,
      description: description,
      prices: [{ label: 'Price', amount: Number(price) }],
      currency: "XTR",
      provider_token: '',
      payload: `ORDER_${userId}_${collectionId}_${id}`,
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
    <li className="flex pl-3  justify-start gap-4">
      <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
        <img src={imageUrl} alt="standart avatar"/>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className={`${s.font} text-zinc-300  break-words`}>
         {title}
        </h3>
        <p className={`${s.font} text-zinc-400 text-[0.65rem]`}>{description}</p>
        <div className="flex items-center gap-1">

          <p className={`${s.font} text-zinc-300 text-sm`}>{price}</p>
          <img src="/assets/telegram_star.svg" alt="telegram-star" />
        </div>
        {showBuyButton && <button className="btn btn-primary w-24 h-8 rounded-4xl mt-1 bg-gradient-to-r from-blue-500 to-purple-500" onClick={handleBuyClick}>Buy</button>}
      </div>
    </li>
  );
}

export default SpecialRobotItem;
