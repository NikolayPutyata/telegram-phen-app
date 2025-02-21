// import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUserBoosts } from '../../redux/selectors';
import s from '/src/App.module.css';

const ModalAddBoosts = () => {
  // const { t } = useTranslation();
  const addBoosts = useSelector(selectUserBoosts);

  return (
  <div>
    <h2 className={`${s.font} text-zinc-300 ml-8 my-3`}>Boosts ⭐</h2>
    <ul className="flex flex-col gap-6">
    {addBoosts.map((boosts, index) => (
    <li key={index} className="flex justify-center px-3 gap-7">
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
        <button onClick={() => sendAddBoost()} className="btn btn-primary w-24 h-9 rounded-4xl" >Add</button>
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
