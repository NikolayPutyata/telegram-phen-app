import s from '/src/App.module.css';

interface TaskItemProps {
  src: string;
  title: string;
  bonus: number;
  completed: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ src, title, bonus, completed }) => {
  return (
    <li className="flex text-center justify-between px-4 items-center">
      <div className="flex gap-1">
        <img src={src} width={16} height={16}/>
        <div className="flex flex-col justify-start">
          <p className={` ${s.font} flex justify-start text-sm`}>{title}</p>
          <span className="flex items-center gap-1.5">
            <p className="text-zinc-300 text-sm">Reward: {bonus}</p>
            <img src="/assets/Group_62.svg" alt="" width={13} />
          </span>
        </div>
      </div>
      <button className="btn btn-outline rounded-3xl px-8">Go</button>
    </li>
  );
};

export default TaskItem;
