import { useDispatch, useSelector } from 'react-redux';
import { handleCheckClick } from '../../utils/getUserFriends.ts';
import s from '/src/App.module.css';
import { selectUserId } from '../../redux/selectors.ts';
import { AppDispatch } from '../../redux/store.ts';


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
  taskId
}) => {

  const userId = useSelector(selectUserId);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li className="flex text-center justify-between px-4 items-center">
      <div className="flex items-center gap-1">
        {completed === false ? (
          <img src={src} className="mr-1 w-7 h-7" />
        ) : (
          <img src="assets/complete.svg" className="mr-1 w-7 h-7" />
        )}
        <div className="flex flex-col justify-start">
          <p className={` ${s.font} flex justify-start text-sm`}>{title}</p>
          <span className="flex items-center gap-1.5">
            <p className="text-zinc-400 tracking-wider text-sm">
              Reward: {bonus}
            </p>
            <img src="/assets/Group_62.svg" alt="" width={13} />
          </span>
        </div>
      </div>
      {completed === false ? (
        <button
          onClick={() => handleCheckClick(taskId, userId, dispatch)}
          className="btn btn-outline rounded-3xl px-7"
        >
          Check
        </button>
      ) : <img src="assets/complete.svg" className="mr-1 w-7 h-7" />}
    </li>
  );
};

export default TaskFriends;
