import s from '/src/App.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { handleCheckSubscriptionClick } from '../../utils/getUserFriends.ts';
// import { selectUserId } from '../../redux/selectors.ts';
// import { AppDispatch } from '../../redux/store.ts';

interface TaskItemProps {
  src: string;
  title: string;
  bonus: number;
  completed: boolean;
  // taskId: number;
  isLoading: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({
  src,
  title,
  bonus,
  completed,
  isLoading,
  // taskId,
}) => {
  // const userId = useSelector(selectUserId);
  // const dispatch = useDispatch<AppDispatch>();

  return (
    <li className="flex text-center justify-between px-4 items-center">
      <div className="flex items-center gap-3">
        <img src={src} className="mr-1 w-6 h-6" />
        <div className="flex flex-col justify-start">
          <p className={`${s.font} flex justify-start text-sm tracking-wider`}>{title}</p>
          <span className="flex items-center gap-1">
            <p className={`${s.font} text-zinc-400 tracking-wider text-xs mt-1`}>
              + {bonus}
            </p>
            <img src="/assets/Group_62.svg" alt="" width={11} height={11} />
          </span>
        </div>
      </div>

      {completed ? (
        <img src="assets/complete.svg" className="mr-4 w-8 h-8" />
      ) : isLoading ? (
        <img src="assets/loading.svg" className="mr-6 w-6 h-6 animate-spin" />
      ) : (
        <button
          // onClick={() => handleCheckSubscriptionClick(taskId, userId, dispatch)}
          className="btn btn-outline btn-sm rounded-3xl px-6 py-4"
        >
          Go
        </button>
      )}
    </li>
  );
};

export default TaskItem;
