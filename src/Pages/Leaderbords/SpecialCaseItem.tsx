import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { createStarInvoice } from '../../utils/createStarInvoice';
import { Case, CasePrize } from '../../types/State';
import { selectUserId } from '../../redux/selectors';
import CasesModal from '../../components/CasesModal/CasesModal';
import s from '/src/App.module.css';

interface SpecialItemProps {
  caseBoosts: Case;
}

function SpecialCaseItem({ caseBoosts }: SpecialItemProps) {
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
      payload: `ORDER_${userId}_${caseBoosts.id}_${caseBoosts.collectionId}`,
    });

    window.Telegram.WebApp.openInvoice(invoiceLink, (status) => {
      if (status === 'paid') {
        setSelectedBoosts(caseBoosts.prize);
        setIsModalOpen(true);
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
        userId={userId}
        boosts={selectedBoosts}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default SpecialCaseItem;
