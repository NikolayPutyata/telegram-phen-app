import { useSelector } from 'react-redux';
import s from '/src/App.module.css';
import { selectUserFriends } from '../../redux/selectors';

interface Friend {
  name: string;
}

const FriendsList = () => {

    const friends = useSelector(selectUserFriends) as Friend[];

  return (
    <div className="px-3 mb-3">
          <div className="bg-neutral-900 rounded-3xl w-full p-3 my-4">
            <ul className="flex flex-col gap-3">
              {friends.map(({ name }, index) => (
                <li key={index} className="flex justify-between px-8">
                  <p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>
                    {name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
  )
}

export default FriendsList
