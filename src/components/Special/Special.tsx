import s from '/src/App.module.css';
import SpecialItem from '../../Pages/Leaderbords/SpecialItem';
// import { useSelector } from 'react-redux';

const Special = () => {
  // const specials = useSelector(selectSpecialId);

  return (
    <div className="flex flex-col px-8 mb-5 tracking-wider">
      <h2 className={`${s.font} text-zinc-300 mb-3`}>Active specials 💎</h2>
      <ul className="flex flex-col gap-6">
        {/* {specials.map((special) => ( */}
        <SpecialItem />
        {/* ))} */}
      </ul>
    </div>
  );
};

export default Special;
