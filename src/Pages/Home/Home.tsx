import { useEffect } from 'react';
import Typed from 'typed.js';
import s from '/src/App.module.css';
import FarmBlock from '../../components/FarmBlock/FarmBlock';
import PresaleBlock from '../../components/PresaleBlock/PresaleBlock';
import AirdropBlock from '../../components/AirdropBlock/AirdropBlock';
import Socials from '../../components/Socials/Socials';

const Home = () => {
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
    <div className="">
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
            src="/assets/cosmo_4.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col px-6 my-4">
          <div className="flex justify-between ">
            <p className={`${s.font} text-zinc-400 text-sm`}>Listing price</p>
            <p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>
              $0.0025
            </p>
          </div>
          <div className="flex justify-between ">
            <p className={`${s.font} text-zinc-400 text-sm`}>Farming end</p>
            <p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>
              2025.08.20
            </p>
          </div>
        </div>
        <p className="italic text-center text-xs my-6 text-zinc-500">
          The vesting date will be announced by the team closer to the listing.
          Stay tuned for updates.
        </p>
      </div>
      <Socials />
      <FarmBlock />
      <PresaleBlock />
      <AirdropBlock />
    </div>
  );
};

export default Home;
