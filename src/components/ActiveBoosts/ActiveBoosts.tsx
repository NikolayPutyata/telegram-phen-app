// import { useTranslation } from 'react-i18next';
import s from '/src/App.module.css';

interface Boost {
  boost_photo_url: string;
  name: string;
  boost_bonus: number;
  idItem: number;
}

interface ActiveBoostsProps {
  activeBoosts: Boost[];
}

const ActiveBoosts: React.FC<ActiveBoostsProps> = ({ activeBoosts }) => {
  //   const { t } = useTranslation();

  return (
    <ul className="flex px-10 flex-col gap-2">
      {activeBoosts?.map((boost) => (
        <li key={boost.idItem} className="flex justify-between items-center">
          <div className="flex justify-center w-10 h-10 overflow-hidden rounded-3xl ">
            <img src={boost.boost_photo_url} alt={boost.name} />
          </div>

          <h3 className={`${s.font} text-zinc-400 break-words`}>
            {boost.name}
          </h3>

          <p className={`${s.font} text-zinc-400`}>
            X {boost.boost_bonus}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ActiveBoosts;
