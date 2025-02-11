import s from '/src/App.module.css';
// import { useSelector } from 'react-redux';

const SkinsModal = () => {
  // const skins = useSelector(selectSkinsId);

  return (
    <div>
      <ul className="flex flex-col  gap-4">
        <h2 className={`${s.font} text-zinc-300 tracking-wider my-3`}>
          Active skins 👑
        </h2>

        {/* {skins.map((skin) => ( */}
        <li className="flex pl-2  gap-10">
          <div className="flex flex-col justify-center w-22 h-22 overflow-hidden rounded-3xl">
            <img src="/assets/shuttle-2.webp" alt="standart avatar" />
          </div>

          <div className="flex justify-start flex-col">
            <h3
              className={`${s.font} text-zinc-300 mb-2 break-words tracking-wider`}
            >
              Misterium
            </h3>
            <p
              className={`${s.font} text-zinc-400 text-sm mb-2 tracking-wider`}
            >
              X3
            </p>
          </div>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
};

export default SkinsModal;
