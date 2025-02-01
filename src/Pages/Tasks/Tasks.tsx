const Tasks = () => {
  return (
    <>
      <div className="my-3">
        <div role="tablist" className="tabs tabs-border">
          <a role="tab" className="tab tab-active">
            Tasks
          </a>
          <a role="tab" className="tab">
            Friends
          </a>
        </div>
      </div>
      <h2 className="text-zinc-400 ml-8 my-2">Gaming Tasks</h2>
      <div className="bg-neutral-900 rounded-3xl p-3 mx-3">
        <ul className="flex flex-col gap-5">
          <li className="flex text-center justify-between px-4 items-center">
            <div className="flex gap-1">
              <img src="" alt="" />
              <div className="flex flex-col justify-start">
                <p className="flex justify-start text-lg">Task 1</p>
                <span className="flex items-center gap-1.5"><p className="text-zinc-300">Reward: 5</p> <img src="/assets/Group_62.svg" alt="" width={16}/></span>
              </div>
            </div>
            <button className="btn btn-outline rounded-3xl px-8">Go</button>
          </li><li className="flex text-center justify-between px-4 items-center">
            <div className="flex gap-1">
              <img src="" alt="" />
              <div className="flex flex-col justify-start">
                <p className="flex justify-start text-lg">Task 1</p>
                <span className="flex items-center gap-1.5"><p className="text-zinc-300">Reward: 5</p> <img src="/assets/Group_62.svg" alt="" width={16}/></span>
              </div>
            </div>
            <button className="btn btn-outline rounded-3xl px-8">Go</button>
          </li>
        </ul>
      </div>
      <h2 className="text-zinc-400 ml-8 my-2">Partners Tasks</h2>
      <div className="bg-neutral-900 rounded-3xl p-3 mx-3">
        <ul className="flex flex-col gap-5">
          <li className="flex text-center justify-between px-4 items-center">
            <div className="flex gap-1">
              <img src="" alt="" />
              <div className="flex flex-col justify-start">
                <p className="flex justify-start text-lg">Task 1</p>
                <span className="flex items-center gap-1.5"><p className="text-zinc-300">Reward: 5</p> <img src="/assets/Group_62.svg" alt="" width={16}/></span>
              </div>
            </div>
            <button className="btn btn-outline rounded-3xl px-8">Go</button>
          </li><li className="flex text-center justify-between px-4 items-center">
            <div className="flex gap-1">
              <img src="" alt="" />
              <div className="flex flex-col justify-start">
                <p className="flex justify-start text-lg">Task 1</p>
                <span className="flex items-center gap-1.5"><p className="text-zinc-300">Reward: 5</p> <img src="/assets/Group_62.svg" alt="" width={16}/></span>
              </div>
            </div>
            <button className="btn btn-outline rounded-3xl px-8">Go</button>
          </li><li className="flex text-center justify-between px-4 items-center">
            <div className="flex gap-1">
              <img src="" alt="" />
              <div className="flex flex-col justify-start">
                <p className="flex justify-start text-lg">Task 1</p>
                <span className="flex items-center gap-1.5"><p className="text-zinc-300">Reward: 5</p> <img src="/assets/Group_62.svg" alt="" width={16}/></span>
              </div>
            </div>
            <button className="btn btn-outline rounded-3xl px-8">Go</button>
          </li><li className="flex text-center justify-between px-4 items-center">
            <div className="flex gap-1">
              <img src="" alt="" />
              <div className="flex flex-col justify-start">
                <p className="flex justify-start text-lg">Task 1</p>
                <span className="flex items-center gap-1.5"><p className="text-zinc-300">Reward: 5</p> <img src="/assets/Group_62.svg" alt="" width={16}/></span>
              </div>
            </div>
            <button className="btn btn-outline rounded-3xl px-8">Go</button>
          </li>
        </ul>
      </div>
      <h2 className="text-zinc-400 ml-8 my-2">Special Tasks</h2>
      <div className="bg-neutral-900 rounded-3xl p-3 mx-3 mb-48">
        <ul className="flex flex-col gap-5">
          <li className="flex text-center justify-between px-4 items-center">
            <div className="flex gap-1">
              <img src="" alt="" />
              <div className="flex flex-col justify-start">
                <p className="flex justify-start text-lg">Task 1</p>
                <span className="flex items-center gap-1.5"><p className="text-zinc-300">Reward: 5</p> <img src="/assets/Group_62.svg" alt="" width={16}/></span>
              </div>
            </div>
            <button className="btn btn-outline rounded-3xl px-8">Go</button>
          </li><li className="flex text-center justify-between px-4 items-center">
            <div className="flex gap-1">
              <img src="" alt="" />
              <div className="flex flex-col justify-start">
                <p className="flex justify-start text-lg">Task 1</p>
                <span className="flex items-center gap-1.5"><p className="text-zinc-300">Reward: 5</p> <img src="/assets/Group_62.svg" alt="" width={16}/></span>
              </div>
            </div>
            <button className="btn btn-outline rounded-3xl px-8">Go</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tasks;
