// import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUserBoosts,
  selectUserActiveBoosts,
} from '../../redux/selectors';
import { addBoostsToActive } from '../../redux/userSlice/userSlice';
import { useState } from 'react';
import s from '/src/App.module.css';

interface LanguageModalProps {
  onClose: () => void;
}

const ModalAddBoosts: React.FC<LanguageModalProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  // const { t } = useTranslation();
  const addBoosts = useSelector(selectUserBoosts);
  const activeBoosts = useSelector(selectUserActiveBoosts);

  const [selectedBoosts, setSelectedBoosts] = useState<number[]>([]);

  const isBoostActive = (idItem: number) => {
    return activeBoosts.some((boost) => boost.idItem === idItem);
  };

  const toggleSelection = (id: number) => {
    if (isBoostActive(id)) {
      return;
    }
    setSelectedBoosts((prev) =>
      prev.includes(id)
        ? prev.filter((boostId) => boostId !== id)
        : [...prev, id],
    );
  };

  const handleAddBoosts = () => {
    const selectedBoostObjects = addBoosts.filter((boost) =>
      selectedBoosts.includes(boost.idItem),
    );
    dispatch(addBoostsToActive(selectedBoostObjects));
    setSelectedBoosts([]);
    onClose();
  };

  return (
    <div className="flex justify-center mb-2 flex-col">
      {addBoosts?.length > 0 ? (
        <>
          <ul className="flex flex-col p-2 gap-2">
            {addBoosts?.map((boost) => (
              <li
                key={boost.idItem}
                className={`rounded-xl p-2 flex gap-8 items-center transition-all
            ${
              selectedBoosts.includes(boost.idItem)
                ? 'bg-gray-800'
                : 'transparent'
            }`}
                onClick={() => toggleSelection(boost.idItem)}
              >
                <div className="flex flex-col justify-center w-15 h-15 overflow-hidden rounded-3xl">
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
                  <div className="flex gap-3">
                    <p
                      className={`${s.font} text-zinc-400 text-sm traking-wider`}
                    >
                      X {boost.boost_bonus}
                    </p>
                    <p
                      className={`${s.font} text-zinc-400 text-sm traking-wider`}
                    >
                      qty: {boost.quantity}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            className="btn btn-primary rounded-4xl"
            onClick={handleAddBoosts}
            disabled={selectedBoosts.length === 0}
          >
            <p className={`${s.font} text-zinc-300 tracking-wider text-sm`}>
              Add Boosts
            </p>
          </button>
        </>
      ) : (
        <p
          className={`${s.font} text-zinc-300  break-words tracking-wider text-center p-6 text-sm`}
        >
          You dont have any boosts 😔
        </p>
      )}
    </div>
  );
};

export default ModalAddBoosts;
