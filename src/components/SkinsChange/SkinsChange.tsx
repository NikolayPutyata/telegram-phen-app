import s from '/src/App.module.css';
import { useTranslation } from 'react-i18next';

const SkinsChange = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2
        className={`${s.font} text-zinc-300 my-4 ml-4 text-lg tracking-wider`}
      >
        {t('Skins change blok')}
      </h2>

      <div className="flex flex-col px-5 pt-5 pb-10 bg-neutral-900 rounded-3xl mx-4 ">
        <div className="flex justify-between mb-10">
          <button
            className="px-3 border-3 border-[#605dff] text-zinc-300 rounded-3xl"
            type="button"
          >
            Skins change
          </button>

          <div className="w-46 h-46 overflow-hidden rounded-3xl">
            <img
              src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261816/avatar_fngbet.webp"
              alt="standart avatar"
            />
          </div>
        </div>

        <div className="flex justify-between ">
          <p className={`${s.font} text-zinc-300 ml-8 tracking-wider`}>Skins</p>

          <button className="btn py-4 px-14 mr-5 btn-primary rounded-4xl ">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkinsChange;
