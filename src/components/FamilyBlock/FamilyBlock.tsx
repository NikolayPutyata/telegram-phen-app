import Socials from '../Socials/Socials';
import s from '/src/App.module.css';
import { useTranslation } from 'react-i18next';

const FamilyBlock = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className={`${s.font} text-zinc-300 ml-4 my-4 mt-8`}>
        {t('Join our family')} ❤️
      </h2>
      <div className="px-6 my-3">
        <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261763/family_kwki0h.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <p
          className={`${s.font} text-zinc-400 text-center mb-3 my-3 tracking-wider`}
        >
          {t(
            'Join the friendly Phenerium family and take part in sweepstakes!',
          )}
        </p>
        <Socials />
      </div>
    </>
  );
};

export default FamilyBlock;
