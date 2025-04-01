import { useSelector } from 'react-redux';
import { createStarInvoice } from '../../utils/createStarInvoice';
import s from '/src/App.module.css';
import { selectUserId } from '../../redux/selectors';
import { Case, CasePrize } from '../../types/State';
import CasesModal from '../../components/CasesModal/CasesModal';
import { ClipLoader } from 'react-spinners';
import { useState } from 'react';

function SpecialItem({ caseBoosts }: Case) {
  const userId = useSelector(selectUserId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBoosts, setSelectedBoosts] = useState<CasePrize[]>([]);

  const handleBuyClick = async () => {
    setIsLoading(true);

    const invoiceLink = await createStarInvoice({
      title: caseBoosts.name,
      description: caseBoosts.desc,
      prices: [{ label: 'Price', amount: Number(caseBoosts.price) }],
      currency: 'XTR',
      provider_token: '',
      payload: `ORDER_${userId}_${caseBoosts.Id}_${caseBoosts.id}`,
    });

    window.Telegram.WebApp.openInvoice(invoiceLink, (status) => {
      if (status === 'paid') {
        // Знаходимо обраний кейс за id
        const selectedCase = caseBoosts.find(
          (caseItem) => caseItem.id === caseBoosts.id,
        );
        if (selectedCase) {
          setSelectedBoosts(selectedCase.prize); // Зберігаємо масив prize у стан
          setIsModalOpen(true); // Відкриваємо модалку
        }
        setIsLoading(false);
      } else if (status === 'cancelled' || status === 'failed') {
        setIsLoading(false);
      }
    });
  };

  return (
    <>
      <li className="flex pl-3 justify-start gap-4">
        <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
          <img src={caseBoosts.imageUrl} alt="standart avatar" />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className={`${s.font} text-zinc-300  break-words`}>
            {caseBoosts.name}
          </h3>
          <p className={`${s.font} text-zinc-400 text-[0.65rem]`}>
            {caseBoosts.desc}
          </p>
          <div className="flex items-center gap-1">
            <p className={`${s.font} text-zinc-300 text-sm`}>
              {caseBoosts.price}
            </p>
            <img src="/assets/telegram_star.svg" alt="telegram-star" />
          </div>
          <button
            className="btn btn-primary w-24 h-8 rounded-4xl mt-1 bg-gradient-to-r from-blue-500 to-purple-500"
            onClick={handleBuyClick}
          >
            {isLoading ? <ClipLoader size={17} color={'#ededed'} /> : 'Buy'}
          </button>
        </div>
      </li>
      <CasesModal
        isOpen={isModalOpen}
        boosts={selectedBoosts}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default SpecialItem;
