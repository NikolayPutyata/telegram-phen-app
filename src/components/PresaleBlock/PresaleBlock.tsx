import s from '/src/App.module.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PresaleBlock = () => {
  const { t } = useTranslation();
  const [placeholder, setPlaceholder] = useState('PHEN');

  const handleTokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceholder(event.target.value === 'usdt' ? 'USDT' : 'TON');
  };

  return (
    <div className="my-5">
      <h2 className={`${s.font} text-zinc-300 ml-4 my-4`}>{t('Presale')} 🚀</h2>

      <div className="flex flex-col justify-center px-3 my-8">
        <div className="flex flex-col px-6 my-4">
          <div className="flex justify-between ">
            <p className={`${s.font} text-zinc-400 `}>{t('Presale price')}</p>
            <p className={`${s.font} text-zinc-400  tracking-wider`}>$0.0015</p>
          </div>

          <div className="mt-4 mb-3 flex flex-col justify-center items-center">
            <div className="flex mb-6 gap-4">
              <div className="flex flex-col items-center gap-4">
                <p className={`${s.font} text-zinc-300 text-sm`}>USDT-0.015</p>
                <label className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="token"
                    value="usdt"
                    className="peer hidden"
                    onChange={handleTokenChange}
                  />
                  <span className="w-32 h-16 flex justify-center items-center outline-2 rounded-4xl outline-[#26a69a] peer-checked:outline-4">
                    <img
                      src="/assets/icons-usdt.svg"
                      className="w-12 h-12"
                      alt="icons-usdt"
                    />
                  </span>
                </label>
              </div>

              <div className="flex flex-col items-center gap-4">
                <p className={`${s.font} text-zinc-300 text-sm`}>TON-0.020</p>
                <label className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="token"
                    value="ton"
                    className="peer hidden"
                    onChange={handleTokenChange}
                  />
                  <span className="w-32 h-16 flex justify-center items-center outline-2 rounded-4xl outline-[#0088cc] peer-checked:outline-4">
                    <img
                      src="/assets/ton.svg"
                      className="w-10 h-10"
                      alt="icons-ton"
                    />
                  </span>
                </label>
              </div>
            </div>

            <input
              type="number"
              placeholder={placeholder}
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
