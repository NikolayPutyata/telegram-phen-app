import s from '/src/App.module.css';
// import { useSelector } from 'react-redux';

const Skins = () => {
  // const skins = useSelector(selectSkinsId);

  return (
    <div className={`${s.font} flex flex-col px-7 mb-5 tracking-wider`}>
      <ul className="flex flex-col gap-6">
        <h2 className="text-zinc-300 my-3">Active specials 👑</h2>

        {/* {special.map((skin) => ( */}
        <li className="flex pl-2 ml-2 gap-10">
          <div className="flex flex-col justify-center w-32 h-32 overflow-hidden rounded-3xl">
            <img src="/assets/shuttle-2.webp" alt="standart avatar" />
          </div>

          <div className="flex justify-start flex-col">
            <h3 className="text-zinc-300 mb-2 text-xl break-words">
              Misterium
            </h3>
            <p className="text-zinc-400 text-base mb-2">X3</p>
          </div>
        </li>
        {/* ))} */}

        <li className="flex pl-2 ml-2 gap-10">
          <div className="flex flex-col justify-center w-32 h-32 overflow-hidden rounded-3xl">
            <img src="/assets/shuttle-2.webp" alt="standart avatar" />
          </div>

          <div className="flex justify-start flex-col">
            <h3 className="text-zinc-300 mb-2 text-xl break-words">
              Misterium
            </h3>
            <p className="text-zinc-400 text-base mb-2">X3</p>
          </div>
        </li>

        <li className="flex pl-2 ml-2 gap-10">
          <div className="flex flex-col justify-center w-32 h-32 overflow-hidden rounded-3xl">
            <img src="/assets/shuttle-2.webp" alt="standart avatar" />
          </div>

          <div className="flex justify-start flex-col">
            <h3 className="text-zinc-300 mb-2 text-xl break-words">
              Misterium
            </h3>
            <p className="text-zinc-400 text-base mb-2">X3</p>
          </div>
        </li>

        <li className="flex pl-2 ml-2 gap-10">
          <div className="flex flex-col justify-center w-32 h-32 overflow-hidden rounded-3xl">
            <img src="/assets/shuttle-2.webp" alt="standart avatar" />
          </div>

          <div className="flex justify-start flex-col">
            <h3 className="text-zinc-300 mb-2 text-xl break-words">
              Misterium
            </h3>
            <p className="text-zinc-400 text-base mb-2">X3</p>
          </div>
        </li>

        <li className="flex pl-2 ml-2 gap-10">
          <div className="flex flex-col justify-center w-32 h-32 overflow-hidden rounded-3xl">
            <img src="/assets/shuttle-2.webp" alt="standart avatar" />
          </div>

          <div className="flex justify-start flex-col">
            <h3 className="text-zinc-300 mb-2 text-xl break-words">
              Misterium
            </h3>
            <p className="text-zinc-400 text-base mb-2">X3</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skins;
