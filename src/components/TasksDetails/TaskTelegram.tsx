import { useState } from 'react';
import s from '/src/App.module.css';
import { ClipLoader } from 'react-spinners';
import checkTelegramSub from '../../utils/checkTelegramSub';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../redux/selectors';
import { AppDispatch } from '../../redux/store';

interface TaskItemProps {
  src: string;
  title: string;
  bonus: number;
  completed: boolean;
  taskId: number;
  channelId: string;
}

const TaskItem: React.FC<TaskItemProps> = ({
  src,
  title,
  bonus,
  completed,
  taskId,
  // channelId
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const userId = useSelector(selectUserId);
  const dispatch = useDispatch<AppDispatch>();

  const checkTelegram = async () => {
      setIsLoading(true);
    await checkTelegramSub(userId, taskId, "-4653767745", dispatch);
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
            <img src="/assets/Group_62.svg" alt="" width={11} height={11} />
          </span>
        </div>
      </div>

      {completed ? (
        <img src="assets/complete.svg" className="mr-4 w-8 h-8" />
      ) : isLoading ? (
        <div className='flex items-center justify-center w-[70px]'><ClipLoader size={15} color={"#ededed"} /></div>
      ) : (
        <button
          onClick={checkTelegram}
          className="btn btn-outline btn-sm rounded-3xl px-6 py-4"
        >
          Go
        </button>
      )}
    </li>
  );
};

export default TaskItem;
