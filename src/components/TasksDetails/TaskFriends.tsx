import s from '/src/App.module.css';

interface TaskItemProps {
  src: string;
  title: string;
  bonus: number;
  completed: boolean;
  // userId: number;
}

const TaskFriends: React.FC<TaskItemProps> = ({
  src,
  title,
  bonus,
  completed,
  // userId,
}) => {
  const handleCheckClick = async () => {
    try {
      const response = await fetch(
        `https://telegram-phen-app-server-scjhs.ondigitalocean.app/user/getFriends`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: 696412766 }),
        },
      );
      const data = await response.json();
      console.log('Friends Data:', data);
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  };

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
          onClick={handleCheckClick}
          className="btn btn-outline rounded-3xl px-7"
        >
          Check
        </button>
      ) : null}
    </li>
  );
};

export default TaskFriends;
