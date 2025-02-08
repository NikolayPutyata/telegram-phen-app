import { useSelector } from 'react-redux';
import Socials from '../../components/Socials/Socials';
import s from '/src/App.module.css';
import {
  selectUserFirstName,
  selectUserTokens,
  selectUserUsername,
} from '../../redux/selectors.ts';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal.tsx';
import ProfileListItem from './ProfileListItem.tsx';

const Profile = () => {
  const username = useSelector(selectUserUsername);
  const tokens = useSelector(selectUserTokens);
  const firstName = useSelector(selectUserFirstName);

  const [isModalOpenBoosts, setIsModalOpenBoosts] = useState(false);
  const [isModalOpenSkins, setIsModalOpenSkins] = useState(false);
  const [isModalOpenSettings, setIsModalOpenSettings] = useState(false);
  const [isModalOpenLanguage, setIsModalOpenLanguage] = useState(false);

  return (
    <div className="flex flex-col items-center bg-neutral-900 rounded-3xl p-3 m-4">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="/assets/avatar.webp" alt="standart avatar" />
        </div>
      </div>
      <h2
        className={`${s.font} text-zinc-300 text-center my-3 text-lg tracking-wider`}
      >
        {username || firstName}
      </h2>
      <div className="flex mb-6 justify-between w-full px-4">
        <p className={`${s.font} text-zinc-300 tracking-wider`}>Total tokens</p>
        <p className={`${s.font} text-zinc-300 tracking-wider`}>
          {tokens} PHEN
        </p>
      </div>

      <ul className={`w-full ${s.font} flex flex-col px-4 mb-5 gap-2 text-sm tracking-wider text-zinc-400 items-center`}>
  <ProfileListItem 
    onClickFu={() => setIsModalOpenBoosts(true)} 
    title="Boosts" 
    imgSrc="/assets/circle-arrow-left.svg" 
    imgAlt="standart avatar" 
  />
  <ProfileListItem 
    onClickFu={() => setIsModalOpenSkins(true)} 
    title="Skins" 
    imgSrc="/assets/circle-arrow-left.svg" 
    imgAlt="standart avatar" 
  />
  <ProfileListItem 
    onClickFu={() => setIsModalOpenLanguage(true)} 
    title="Language" 
    imgSrc="/assets/circle-arrow-left.svg" 
    imgAlt="standart avatar" 
  />
  <ProfileListItem 
    onClickFu={() => setIsModalOpenSettings(true)} 
    title="Settings" 
    imgSrc="/assets/circle-arrow-left.svg" 
    imgAlt="standart avatar" 
  />
</ul>

      <button className="btn w-72 btn-primary my-4">Connect TON Wallet</button>
      <Socials />

      <Modal
        isOpen={isModalOpenBoosts}
        changeModal="boosts"
        onClose={() => setIsModalOpenBoosts(false)}
      />

      <Modal
        isOpen={isModalOpenSkins}
        changeModal="skins"
        onClose={() => setIsModalOpenSkins(false)}
      />

      <Modal
        isOpen={isModalOpenSettings}
        changeModal="settings"
        onClose={() => setIsModalOpenSettings(false)}
      />

      <Modal
        isOpen={isModalOpenLanguage}
        changeModal="language"
        onClose={() => setIsModalOpenLanguage(false)}
      />
    </div>
  );
};

export default Profile;
