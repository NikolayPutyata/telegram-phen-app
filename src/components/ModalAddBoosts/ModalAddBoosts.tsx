// import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserBoosts } from '../../redux/selectors';
import s from '/src/App.module.css';

// type Boost = {
//     id: number;
//     title: string;
//     desc: string;
//     price: string;
//     imgSrc: string;
//   };

const ModalAddBoosts = () => {
    const dispatch = useDispatch();
  // const { t } = useTranslation();
  const addBoosts = useSelector(selectUserBoosts);

  return (
  <div>
    <h2 className={`${s.font} text-zinc-300 ml-8 my-3`}>Boosts ⭐</h2>

    <ul className="flex flex-col gap-6">
    {addBoosts.map((boost) => (
    <li key={boost.id} className="flex justify-center px-3 gap-7">
         className={`px-3 rounded-lg flex justify-between items-center cursor-pointer transition-all
              ${activeBoosts.some(b => b.id === boost.id) ? "bg-blue-500" : "bg-gray-800"}`}
            onClick={() => dispatch(toggleBoostSelection(boost.id))}
          >

    <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
        <img
            src={boosts.imgSrc}
            alt={boosts.title}
            className="object-cover w-full h-full"
            />
        </div>

        <div className="flex justify-start flex-col">
        <h3
            className={`${s.font} text-zinc-300 mb-3 break-words tracking-wider`}
        >
            {boosts.title}
        </h3>
        <p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>
            {boosts.desc}
        </p>
        <p
            className={`${s.font} text-zinc-400 text-sm mb-2 tracking-wider`}
        >
            {boosts.price}
        </p>
        <button onClick={() => dispatch(addSelectedBoosts())} className="btn btn-primary w-24 h-9 rounded-4xl" >Add</button>
    </div>
    </li>

      ))}
    </ul>            <button
              className="btn btn-primary w-24 h-9 rounded-4xl"
              onClick={() => handleAddBoost(boost.id, boost.price)}>
            >
              Add Boosts
            </button>
  </div>
  );

};

export default ModalAddBoosts;
