import { useSelector } from 'react-redux';
import { selectUserTasks } from '../../redux/selectors';
import TaskItem from './TaskItem';
import TaskFriends from './TaskFriends';

const TasksDetails = () => {
  const tasks = useSelector(selectUserTasks);
  // const id = useSelector(selectUserId);

  return (
    <>
      <div className="px-3 mb-3">
        <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739262447/work_oxlovu.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div>
        <h2 className="text-zinc-400 ml-8 my-2">Gaming Tasks</h2>
        <div className="bg-neutral-900 rounded-3xl px-2 py-4 mx-3">
          <ul className="flex flex-col gap-5">
            {tasks.gaming.map((task) => (
              <TaskItem
                key={task.id}
                src={task.svg_url}
                title={task.name}
                bonus={task.task_bonus}
                completed={task.completed}
              />
            ))}
          </ul>
        </div>

        <h2 className="text-zinc-400 ml-8 my-2">Partners Tasks</h2>
        <div className="bg-neutral-900 rounded-3xl px-2 py-4 mx-3">
          <ul className="flex flex-col gap-5">
            {tasks.partners.map((task) => (
              <TaskFriends
                key={task.id}
                src={task.svg_url}
                title={task.name}
                bonus={task.task_bonus}
                completed={task.completed}
                // userId={id}
              />
            ))}
          </ul>
        </div>

        <h2 className="text-zinc-400 ml-8 my-2">Special Tasks</h2>
        <div className="bg-neutral-900 rounded-3xl px-2 py-4 mx-3 mb-32">
          <ul className="flex flex-col gap-5">
            {tasks.special.map((task) => (
              <TaskItem
                key={task.id}
                src={task.svg_url}
                title={task.name}
                bonus={task.task_bonus}
                completed={task.completed}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TasksDetails;
