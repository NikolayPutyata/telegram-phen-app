// import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserBoosts } from '../../redux/selectors';
import { addBoostsToActive } from '../../redux/userSlice/userSlice';
import { useState } from 'react';
import s from '/src/App.module.css';

const ModalAddBoosts = () => {
  const dispatch = useDispatch();
  // const { t } = useTranslation();
  const addBoosts = useSelector(selectUserBoosts);

  const [selectedBoosts, setSelectedBoosts] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedBoosts((prev) =>
      prev.includes(id)
        ? prev.filter((boostId) => boostId !== id)
        : [...prev, id],
    );
  };

  const handleAddBoosts = () => {
    const selectedBoostObjects = addBoosts.filter((boost) =>
      selectedBoosts.includes(boost.id),
    );
    dispatch(addBoostsToActive(selectedBoostObjects));
    setSelectedBoosts([]); // Очищуємо вибір після додавання
  };

  console.log('Boosts from store:', addBoosts);

  return (
    <div className="flex justify-center flex-col">
      <h2 className={`${s.font} text-zinc-300 ml-8 mb-3`}>Boosts ⭐</h2>

      <ul className="flex flex-col p-6 gap-4">
        {addBoosts.map((boost) => (
          <li
            key={boost.id}
            className={`rounded-xl flex gap-14 items-center cursor-pointer transition-all
       ${selectedBoosts.includes(boost.id) ? 'bg-gray-800' : 'transparent'}`}
            onClick={() => toggleSelection(boost.id)}
          >
            <div className="flex flex-col justify-center w-22 h-22 overflow-hidden rounded-3xl">
              <img
                src={boost.boost_photo_url}
                alt={boost.name}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex justify-start gap-2 flex-col">
              <h3
                className={`${s.font} text-zinc-300  break-words tracking-wider`}
              >
                {boost.name}
              </h3>
              <p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>
                {boost.boost_bonus}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary w-28 rounded-4xl"
        onClick={handleAddBoosts}
        disabled={selectedBoosts.length === 0}
      >
        Add Boosts
      </button>
    </div>
  );
};

export default ModalAddBoosts;
