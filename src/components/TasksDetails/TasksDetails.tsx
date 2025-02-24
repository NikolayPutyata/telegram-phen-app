import { useSelector } from 'react-redux';
import {
  selectUserTasks,
  selectIsLoading,
} from '../../redux/selectors';
import TaskItem from './TaskItem';
import TaskFriends from './TaskFriends';
import s from '/src/App.module.css';

const TasksDetails = () => {
  const tasks = useSelector(selectUserTasks);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <div className="px-3 mb-5">
        <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739262447/work_oxlovu.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div>
        <h2 className={`${s.font} text-zinc-400 ml-8 my-2 text-sm tracking-wider`}>Gaming Tasks</h2>
        <div className="bg-neutral-900 rounded-3xl px-2 py-5 mx-3">
          <ul className="flex flex-col gap-5">
            {tasks?.gaming.map((task) => (
              <TaskItem
                key={task.id}
                src={task.svg_url}
                title={task.name}
                bonus={task.task_bonus}
                completed={task.completed}
                isLoading={isLoading}
              />
            ))}
          </ul>
        </div>

        <h2 className={`${s.font} text-zinc-400 ml-8 my-2 text-sm tracking-wider`}>Partners Tasks</h2>
        <div className="bg-neutral-900 rounded-3xl px-2 py-5 mx-3">
          <ul className="flex flex-col gap-5">
            {tasks?.partners.map((task) => (
              <TaskFriends
                key={task.id}
                src={task.svg_url}
                title={task.name}
                bonus={task.task_bonus}
                completed={task.completed}
                taskId={task.id}
                isLoading={isLoading}
              />
            ))}
          </ul>
        </div>

        <h2 className={`${s.font} text-zinc-400 ml-8 my-2 text-sm tracking-wider`}>Special Tasks</h2>
        <div className="bg-neutral-900 rounded-3xl px-2 py-4 mx-3 mb-32">
          <ul className="flex flex-col gap-5">
            {tasks?.special.map((task) => (
              <TaskItem
                key={task.id}
                src={task.svg_url}
                title={task.name}
                bonus={task.task_bonus}
                completed={task.completed}
                isLoading={isLoading}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TasksDetails;
