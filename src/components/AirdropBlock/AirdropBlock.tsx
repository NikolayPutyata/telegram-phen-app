import s from '/src/App.module.css';
import { useTranslation } from 'react-i18next';

const AirdropBlock = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className={`${s.font} text-zinc-300 ml-4 my-4 tracking-wider`}>{t('Airdrop')} 🎁</h2>
      <div className="flex flex-col px-3 mb-3">
        <div className="relative w-full h-44 overflow-hidden rounded-4xl mb-3">
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261797/airdrop_mkpylv.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <p
          className={`${s.font} text-zinc-400 text-center mb-3 tracking-wider`}
        >
          {t(
            'To participate in the airdrop, purchase tokens worth $50 during the presale.',
          )}
        </p>
        <button
          className="btn btn-primary w-56 rounded-4xl self-center"
          disabled={true}
        >
          {t('Join the Airdrop')}
        </button>
      </div>
    </div>
  );
};

export default AirdropBlock;
