import { useDispatch, useSelector } from 'react-redux';
import { handleCheckClick } from '../../utils/checkUserFriends.ts';
import s from '/src/App.module.css';
import { selectUserFriendsQuantity, selectUserId } from '../../redux/selectors.ts';
import { AppDispatch } from '../../redux/store.ts';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

interface TaskItemProps {
  src: string;
  title: string;
  bonus: number;
  completed: boolean;
  taskId: number;
}

const TaskFriends: React.FC<TaskItemProps> = ({
  src,
  title,
  bonus,
  completed,
  taskId,
}) => {
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch<AppDispatch>();
  const friendCount = useSelector(selectUserFriendsQuantity);
  const [isLoading, setIsLoading] = useState(false);

  const checkFriends = async () => {
    setIsLoading(true);
    await handleCheckClick(taskId, userId, friendCount, dispatch);
    setIsLoading(false);
  };


  return (
    <li className="flex text-center justify-between px-4 items-center">
      <div className="flex items-center gap-3">
        <img src={src} className="mr-1 w-6 h-6" />
        <div className="flex flex-col justify-start">
          <p className={`${s.font} flex justify-start text-xs tracking-wider`}>{title}</p>
          <span className="flex items-center gap-1 mt-1">
            <p className={`${s.font} text-zinc-400 tracking-wider text-[0.65rem]`}>
              + {bonus}
            </p>
            <img src="/assets/Group_62.svg" alt="coin" width={11} height={11}/>
          </span>
        </div>
      </div>

      {completed ? (
        <img src="assets/complete.svg" className="mr-4 w-8 h-8" />
      ) : isLoading ? (
        <div className='flex items-center justify-center w-[70px]'><ClipLoader size={15} color={"#ededed"} /></div>
      ) : (
        <button
          onClick={checkFriends}
          className="btn btn-outline btn-sm rounded-3xl px-5 py-4"
        >
          Done
        </button>
      )}
    </li>
  );
};

export default TaskFriends;
