import { useSelector } from 'react-redux';
import s from '/src/App.module.css';
import { selectUserTokens } from '../../redux/selectors';


const FarmBlock = () => {
  const tokens = useSelector(selectUserTokens);

  // const [isFarmDisabled, setIsFarmDisabled] = useState<boolean>(false);
  // const [isClaimDisabled, setIsClaimDisabled] = useState<boolean>(true);

  // const handleClick = (): void => {
  //   setIsFarmDisabled(true);
  //   setIsClaimDisabled(true);

  //   // Запуск анімації
  //   anime({
  //     targets: '.farm-button',
  //     innerHTML: [0.003, 88], // Замініть 1000 на кінцеве значення, яке ви хочете показати після 8 годин
  //     easing: 'linear',
  //     duration: 28800000,
  //     round: false,
  //     update: (anim) => {
  //       const value = parseFloat(anim.animations[0].currentValue.toString());
  //       const formattedValue =
  //         value % 1 === 0 ? value.toFixed(0) : value.toFixed(3); // Відображати цілі або дробові числа
  //       anim.animatables[0].target.innerHTML = formattedValue;
  //     },
  //     complete: () => {
  //       setIsClaimDisabled(false);
  //     },
  //   });
  // };

  // // 28800000,

  // const handleClaimClick = (): void => {
  //   setIsClaimDisabled(true);
  //   setIsFarmDisabled(false);
  // };

  return (
    <div className="my-5">
      <h2 className={`${s.font} text-zinc-300 ml-4 my-4 mt-8`}>
        Farm PHEN Tokens 💰
      </h2>
      <div className="flex flex-col justify-center px-3 my-3 mb-8">
        <div className="flex flex-col px-6 my-4">
          <div className="flex justify-center items-center">
            <span className={`${s.font} text-zinc-400 text-3xl`}>{tokens}</span>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] grid-rows-1 items-center justify-center gap-3">
          <button
            className="btn btn-primary rounded-4xl"

          >
            <span className="farm-button">Farm</span>
          </button>
          <button
            className="btn btn-primary rounded-4xl"

          >
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmBlock;
