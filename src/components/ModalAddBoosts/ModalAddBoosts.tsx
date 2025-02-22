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

  const [selectedBoosts, setSelectedBoosts] = useState<number[]>([]); // зберігаю обєкти поки не відправив

  const toggleSelection = (id: number) => {
    setSelectedBoosts(
      (prev) =>
        prev.includes(id)
          ? prev.filter((boostId) => boostId !== id) // Видаляю ід, якщо вже є в масиві
          : [...prev, id], // Додаю ід, якщо його ще немає
    );
  };

  const handleAddBoosts = () => {
    const selectedBoostObjects = addBoosts.filter((boost) =>
      selectedBoosts.includes(boost.id),
    );
    dispatch(addBoostsToActive(selectedBoostObjects)); // Додаю вибрані ьусти в редакс
    setSelectedBoosts([]); // Очищую вибір після додавання
  };

  return (
    <div className="flex justify-center mb-2 flex-col">
      <h2 className={`${s.font} text-zinc-300 ml-8 mb-2`}>Boosts ⭐</h2>

      <ul className="flex flex-col p-2 gap-2">
        {addBoosts.map((boost) => (
          <li
            key={boost.id}
            className={`rounded-xl p-2 flex gap-12 items-center cursor-pointer transition-all
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
        className="btn btn-primary rounded-4xl"
        onClick={handleAddBoosts}
        disabled={selectedBoosts.length === 0}
      >
        Add Boosts
      </button>
    </div>
  );
};

export default ModalAddBoosts;
