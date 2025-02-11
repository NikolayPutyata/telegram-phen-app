import { useSelector } from 'react-redux';
import s from '/src/App.module.css';
import { useTranslation } from 'react-i18next';
import { selectUserId } from '../../redux/selectors';
import { selectUserFriends } from '../../redux/selectors';
import FriendsList from './FriendsList';

const Friends = () => {
  const { t } = useTranslation();
  const userId = useSelector(selectUserId);

  const invateFriendFu = (): void => {
    const refCode = `${userId}`;
    const inviteLink = `https://t.me/test127826871_bot?start=${refCode}`;

    window.Telegram.WebApp.openTelegramLink(
      `https://t.me/share/url?url=${encodeURIComponent(
        inviteLink,
      )}&text=${encodeURIComponent(
        'Play Phenerium with me! Farm coins, collect skins, use boosts. Listing coming soon!',
      )}`,
    );
  };
  const friends = useSelector(selectUserFriends);

  return (
    <>
      <div className="px-3 mb-3">
        <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
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

      {friends.length === 0 ? (
        <div className="flex flex-col justify-center gap-5 items-center my-4">
          <p className={`${s.font} text-zinc-400 text-sm`}>
            {t('No friends yet')} 😔
          </p>
        </div>
      ) : null}

      {friends.length > 0 ? <FriendsList /> : null}

      <div className="flex justify-center">
        <button
          className="btn btn-wide bg-gray-100 text-black rounded-3xl"
          onClick={invateFriendFu}
        >
          {t('Invite')}
        </button>
      </div>
    </>
  );
};

export default Friends;
