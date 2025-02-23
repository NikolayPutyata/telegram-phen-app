import s from '/src/App.module.css';
// import { useSelector } from 'react-redux';

const BoostsModal = () => {
  // const boosts = useSelector(selectBoostsId);

  return (
    <>
      <ul className={`${s.font} tracking-wider flex flex-col  gap-4`}>
      

        {/* {boosts.map((boost) => ( */}
        <li className="flex pl-2  gap-8">
          <div className="flex flex-col justify-center w-16 h-16 overflow-hidden rounded-3xl">
            <img src="/assets/engine.webp" alt="standart avatar" />
          </div>

          <div className="flex justify-start flex-col">
            <h3 className="text-zinc-300 mb-2 break-words">Insignia</h3>
            <p className="text-zinc-400 text-sm mb-2">X3</p>
          </div>
        </li>
        {/* ))} */}

        <li className="flex pl-2 gap-8">
          <div className="flex flex-col justify-center w-16 h-16 overflow-hidden rounded-3xl">
            <img src="/assets/commandor.webp" alt="standart avatar" />
          </div>

          <div className="flex justify-start flex-col">
            <h3
              className={`${s.font} text-zinc-300 mb-2 break-words tracking-wider`}
            >
              X-treal
            </h3>
            <p
              className={`${s.font} text-zinc-400 text-sm mb-3 tracking-wider`}
            >
              X6
            </p>
          </div>
        </li>

      </ul>
    </>
  );
};

export default BoostsModal;
