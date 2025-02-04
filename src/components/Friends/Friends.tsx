import { useSelector } from 'react-redux';
import s from '/src/App.module.css';
import { selectUserFriends } from '../../redux/selectors';
import FriendsList from './FriendsList';

interface Friend {
  name: string;
}

const Friends = () => {
  const friends = useSelector(selectUserFriends) as Friend[];

  return (
    <>
      <div className="px-3 mb-3">
        <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
          <img
            src="/assets/friends.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className={`${s.font} text-zinc-300 text-center my-4 tracking-wider`}>
          Invite friends and get 500 PHEN for each!
        </h2>
      </div>

      {friends.length > 0 ? null : (
        <div className="flex flex-col justify-center gap-5 items-center my-4">
          <p className={`${s.font} text-zinc-400 text-sm`}>No friends yet 😔</p>
        </div>
      )}

      {friends.length > 0 ? <FriendsList /> : null}

      <div className="flex justify-center">
        <button className="btn btn-wide bg-gray-100 text-black rounded-3xl">
          Invite
        </button>
      </div>
    </>
  );
};

export default Friends;
