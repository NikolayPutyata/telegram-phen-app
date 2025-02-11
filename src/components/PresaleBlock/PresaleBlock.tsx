import s from '/src/App.module.css';
import { useTranslation } from 'react-i18next';

const PresaleBlock = () => {
  const { t } = useTranslation();

  return (
    <div className="my-5">
      <h2 className={`${s.font} text-zinc-300 ml-4 my-4`}>{t('Presale')} 🚀</h2>

      <div className="flex flex-col justify-center px-3 my-8">
        <div className="flex flex-col px-6 my-4">
          <div className="flex justify-between ">
            <p className={`${s.font} text-zinc-400 `}>{t('Presale price')}</p>

            <p className={`${s.font} text-zinc-400  tracking-wider`}>$0.0015</p>
          </div>
          <div className="mt-4 mb-3 flex justify-center items-center">
            <input
              type="text"
              placeholder="PHEN"
              className={`${s.font} input tracking-wider focus:outline-none focus:border-4 input-primary border-3 px-6 text-zinc-300 rounded-4xl py-4`}
            />
          </div>
        </div>
        <button className="btn btn-primary w-56 rounded-4xl self-center">
          {t('Buy')}
        </button>
      </div>
    </div>
  );
};

export default PresaleBlock;
