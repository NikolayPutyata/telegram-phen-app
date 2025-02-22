// import { useTranslation } from 'react-i18next';
import s from '/src/App.module.css';

interface Boost {
  boost_photo_url: string;
  name: string;
  boost_bonus: string;
  id: number;
}

interface ActiveBoostsProps {
  activeBoosts: Boost[]; // Оновлений тип
}

const ActiveBoosts: React.FC<ActiveBoostsProps> = ({ activeBoosts }) => {
  //   const { t } = useTranslation();

  return (
    <ul className="flex px-4 flex-col gap-2">
      {activeBoosts.map((boost) => (
        <li className="flex justify-between">
          <div className="flex justify-center w-8 h-8 overflow-hidden rounded-3xl">
            <img src={boost.boost_photo_url} alt={boost.name} />
          </div>

          <h3 className={`${s.font} text-zinc-300 break-words`}>
            {boost.name}
          </h3>

          <p className={`${s.font} text-zinc-400 text-sm`}>
            {boost.boost_bonus}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ActiveBoosts;
