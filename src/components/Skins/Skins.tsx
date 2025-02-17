import s from '/src/App.module.css';
import SkinsItem from '../../Pages/Leaderbords/SkinsItem';
// import { useSelector } from 'react-redux';

const Skins = () => {
  // const skins = useSelector(selectSkinsId);

  return (
    <div className="flex flex-col pl-8 pb-5 tracking-wider">
      <h2 className={`${s.font} text-zinc-300 mb-3`}>Active specials 👑</h2>
      <ul className="flex flex-col gap-6">
        {/* {skins.map((skin) => ( */}
        <SkinsItem />
        {/* ))} */}
      </ul>
    </div>
  );
};

export default Skins;
