// import { useTranslation } from 'react-i18next';
import s from '/src/App.module.css';

// interface = activeBoostsProps {
//   imgSrc: string,
//   title: string,
//   price: string,
//   idItem: number,
// }

// : React.FC<activeBoostsProps> = ({ activeBoosts })

const ActiveBoosts = () => {
  //   const { t } = useTranslation();

  return (
    <ul className="flex px-4 flex-col gap-2">
      {/* {activeBoosts.map((skin) => ( */}
      <li className="flex justify-between">
        <div className="flex justify-center w-7 h-7 overflow-hidden rounded-3xl">
          <img src="/assets/shuttle-2.webp" alt="standart avatar" />
        </div>

        <h3 className={`${s.font} text-zinc-300 break-words`}>Misterium</h3>

        <p className={`${s.font} text-zinc-400 text-sm`}>0.003</p>
      </li>
      {/* ))} */}
    </ul>
  );
};

export default ActiveBoosts;
