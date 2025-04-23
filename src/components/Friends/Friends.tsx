import { useSelector } from 'react-redux';
import { useState } from 'react';
import s from '/src/App.module.css';
import { useTranslation } from 'react-i18next';
import { selectRefLink, selectUserId } from '../../redux/selectors';
import { selectUserFriends } from '../../redux/selectors';
import Modal from '../../components/Modal/Modal';
import FriendsList from './FriendsList';
import TelegramLinkForm from './TelegramLinkForm';

const Friends = () => {
  const { t } = useTranslation();
  const userId = useSelector(selectUserId);
  const refLink = useSelector(selectRefLink);
  const friends = useSelector(selectUserFriends);

  const [isModalOpenGuideLink, setIsModalOpenGuideLink] = useState(false);

  const invateFriendFu = (): void => {
    const refCode = `${userId}`;
    const inviteLink = `https://t.me/phenerium_bot?start=${refCode}`;

    window.Telegram.WebApp.openTelegramLink(
      `https://t.me/share/url?url=${encodeURIComponent(
        inviteLink,
      )}&text=${encodeURIComponent(
        'Play Phenerium with me! Farm coins, collect skins, use boosts. Listing coming soon!',
      )}`,
    );
  };

  const invateFriendFuWithRefCode = (): void => {
    window.Telegram.WebApp.openTelegramLink(
      `https://t.me/share/url?url=${encodeURIComponent(refLink)}`,
    );
  };

  return (
    <div className="mb-32">
      <div className="px-3">
        <div className="relative w-full h-44 overflow-hidden rounded-4xl mb-4">
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261781/friends_yda58q.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <h2
          className={`${s.font} text-zinc-300 text-center my-4 tracking-wider`}
        >
          {t('Invite friends and get 500 PHEN for each!')}
        </h2>
      </div>

      {friends.length > 0 ? <FriendsList /> : null}

      <div className="flex justify-center">
        <button
          className="btn btn-wide bg-gray-100 text-black rounded-3xl"
          onClick={invateFriendFu}
        >
          {t('Invite')}
        </button>
      </div>

      <div className="flex flex-col justify-center items-center my-4">
        <p
          className={`${s.font} text-zinc-400 text-sm m-4 px-4 tracking-wider text-center`}
        >
          {t(
            'We also participate in the Telegram affiliate referral program, where you can get 50% of the Stars your friends spend!',
          )}
        </p>
        <p
          className={`${s.font} text-zinc-400 text-sm  mb-8 px-4 tracking-wider text-center`}
        >
          {t(
            'Paste your Telegram referral link below and share for free Stars!',
          )}
        </p>
        <TelegramLinkForm />
        <button
          className={`flex items-center gap-1.7 btn btn-wide bg-gray-100 rounded-3xl ${
            refLink.length < 3 ? '' : 'text-black'
          }`}
          onClick={invateFriendFuWithRefCode}
          disabled={refLink.length < 3}
        >
          <span>{t('Invite for free Stars')}</span>
          <img
            src="/assets/tgPr.png"
            alt="telegram-star"
            width={16}
            className="mt-0.5"
          />
        </button>
        <button
          type="button"
          onClick={() => setIsModalOpenGuideLink(true)}
          className={`${s.font} text-xs tracking-wider border-b border-zinc-500 italic mt-3 text-zinc-500`}
        >
          {t('Where can I get a Telegram referral link?')}
        </button>
      </div>

      <Modal
        isOpen={isModalOpenGuideLink}
        changeModal="guide"
        onClose={() => setIsModalOpenGuideLink(false)}
      />
    </div>
  );
};

export default Friends;
