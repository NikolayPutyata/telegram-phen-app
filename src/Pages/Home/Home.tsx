import { useEffect } from 'react';
import Typed from 'typed.js';
import s from '/src/App.module.css';
import FarmBlock from '../../components/FarmBlock/FarmBlock';
import PresaleBlock from '../../components/PresaleBlock/PresaleBlock';
import AirdropBlock from '../../components/AirdropBlock/AirdropBlock';
import FamilyBlock from '../../components/FamilyBlock/FamilyBlock';
// import SkinsChange from '../../components/SkinsChange/SkinsChange.tsx';
import Socials from '../../components/Socials/Socials';
import { useTranslation } from 'react-i18next';
// import SkinsChange from '../../components/SkinsChange/SkinsChange';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const typed = new Typed('.element', {
      strings: [
        'Welcome Commandor!',
        'Bienvenue Commandant!',
        'ようこそ指揮官!',
        'Willkommen, Kommandant!',
        '歡迎指揮官!',
        'स्वागत है कमांडर!',
        'Welcome Commandor!',
      ],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="mb-32">
      <div className="flex justify-center items-center h-13">
        <h2
          className={`${s.font} text-zinc-300 text-center my-3 text-lg element`}
        >
          Welcome Commandor!
        </h2>
      </div>
      <div className="px-3 mb-3">
        <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261354/cosmo_4_gphulr.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col px-6 my-4">
          <div className="flex justify-between ">
            <p className={`${s.font} text-zinc-400 text-sm`}>
              {t('Listing price')}
            </p>
            <p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>
              $0.0025
            </p>
          </div>
          <div className="flex justify-between ">
            <p className={`${s.font} text-zinc-400 text-sm`}>
              {t('Farming end')}
            </p>
            <p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>
              2025.08.20
            </p>
          </div>
        </div>
        <p className="italic text-center text-xs my-6 text-zinc-500">
          {t(
            'The vesting date will be announced by the team closer to the listing. Stay tuned for updates.',
          )}
        </p>
      </div>
      <Socials />
      {/* <SkinsChange /> */}
      <FarmBlock />
      <PresaleBlock />
      <AirdropBlock />
      <FamilyBlock />
    </div>
  );
};

export default Home;
