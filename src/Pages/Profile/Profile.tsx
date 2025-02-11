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
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
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
          <img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261816/avatar_fngbet.webp" alt="standart avatar" />
        </div>
      </div>
      <h2
        className={`${s.font} text-zinc-300 text-center my-3 text-lg tracking-wider`}
      >
        {username || firstName}
      </h2>
      <div className="flex mb-6 justify-between w-full px-4">
        <p className={`${s.font} text-zinc-300 tracking-wider`}>
          {t('Total tokens')}
        </p>
        <p className={`${s.font} text-zinc-300 tracking-wider`}>
          {tokens} {t('PHEN')}
        </p>
      </div>

      <ul
        className={`w-full ${s.font} flex flex-col px-4 mb-5 gap-2 text-sm tracking-wider text-zinc-400 items-center`}
      >
        <ProfileListItem
          onClickFu={() => setIsModalOpenBoosts(true)}
          title={t('Boosts')}
          imgSrc="/assets/circle-arrow-left.svg"
          imgAlt="standart avatar"
        />
        <ProfileListItem
          onClickFu={() => setIsModalOpenSkins(true)}
          title={t('Skins')}
          imgSrc="/assets/circle-arrow-left.svg"
          imgAlt="standart avatar"
        />
        <ProfileListItem
          onClickFu={() => setIsModalOpenLanguage(true)}
          title={t('Language')}
          imgSrc="/assets/circle-arrow-left.svg"
          imgAlt="standart avatar"
        />
        <ProfileListItem
          onClickFu={() => setIsModalOpenSettings(true)}
          title={t('Settings')}
          imgSrc="/assets/circle-arrow-left.svg"
          imgAlt="standart avatar"
        />
      </ul>

      <button className="btn w-72 btn-primary rounded-4xl my-4">
        {t('Connect TON Wallet')}
      </button>
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
