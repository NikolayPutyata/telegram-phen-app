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

      <ul
        className={`w-full ${s.font} px-4 mb-5 flex flex-col text-sm tracking-wider text-zinc-400 items-center`}
      >
        <li className="w-full py-1 items-center  flex justify-between ">
          <button
            type="button"
            onClick={() => setIsModalOpenBoosts(true)}
            className="w-full items-center pr-6 flex justify-between "
          >
            Boosts
            <img
              src="/public/assets/circle-arrow-left.svg "
              alt="standart avatar"
              className="w-5"
            />
          </button>
        </li>
        <li className="w-full py-1 items-center flex justify-between ">
          <button
            type="button"
            onClick={() => setIsModalOpenSkins(true)}
            className="w-full items-center pr-6 flex justify-between  "
          >
            Skins
            <img
              src="/public/assets/circle-arrow-left.svg "
              alt="standart avatar"
              className="w-5"
            />
          </button>
        </li>
        <li className="w-full py-1 items-center flex justify-between ">
          <button
            type="button"
            onClick={() => setIsModalOpenLanguage(true)}
            className="w-full items-center pr-6 flex justify-between  "
          >
            Language
            <img
              src="/public/assets/circle-arrow-left.svg "
              alt="standart avatar"
              className="w-5"
            />
          </button>
        </li>
        <li className="w-full py-1 items-center flex justify-between ">
          <button
            type="button"
            onClick={() => setIsModalOpenSettings(true)}
            className="w-full items-center pr-6 flex justify-between  "
          >
            Settings
            <img
              src="/public/assets/circle-arrow-left.svg "
              alt="standart avatar"
              className="w-5"
            />
          </button>
        </li>
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
