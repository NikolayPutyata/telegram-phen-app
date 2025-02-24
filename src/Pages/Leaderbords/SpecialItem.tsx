
import { createStarInvoice } from '../../utils/createStarInvoice';
import s from '/src/App.module.css';

interface SpecialItemProps {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  description: string;
}

function SpecialItem({ title, imageUrl, price, id, description }: SpecialItemProps) {


  const handleBuyClick = async () => {

    const invoiceLink = await createStarInvoice({
      title: title,
      description: description,
      prices: [{ label: 'Price', amount: price }],
      currency: "XTR",
      provider_token: '',
      payload: `${id}`,
    });

    window.Telegram.WebApp.openInvoice(invoiceLink, async (status: string) => {
      if (status === 'paid') {
        console.log('Оплата успешна!');
        alert('Спасибо за покупку!');
      } else if (status === 'cancelled') {
        console.log('Оплата отменена');
        alert('Оплата отменена');
      } else if (status === 'failed') {
        console.log('Ошибка оплаты');
        alert('Что-то пошло не так');
      }
    
   
    })};

  return (
    <li className="flex px-3  justify-start gap-8">
      <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
        <img src={imageUrl} alt="standart avatar" />
      </div>

      <div className="flex flex-col">
        <h3 className={`${s.font} text-zinc-300 mb-3  break-words`}>
         {title}
        </h3>
        <div className="flex items-center gap-1 mb-4">
          <p className={`${s.font} text-zinc-400 text-sm`}>{price}</p>
          <img src="/assets/telegram_star.svg" alt="telegram-star" />
        </div>
        <button className="btn btn-primary w-24 h-9 rounded-4xl" onClick={handleBuyClick}>Buy</button>
      </div>
    </li>
  );
}

export default SpecialItem;
