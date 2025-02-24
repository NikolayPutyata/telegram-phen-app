import s from '/src/App.module.css';
import { useSelector } from 'react-redux';
import { selectUserBoosts } from '../../redux/selectors';

const BoostsModal = () => {
  const boosts = useSelector(selectUserBoosts);

  return (
    <>
      {boosts.length > 0 ? (
        <ul className={`${s.font} tracking-wider flex flex-col  gap-4`}>
          {boosts.map((boost) => (
            <li key={boost.idItem} className="flex pl-2  gap-8">
              <div className="flex flex-col justify-center w-16 h-16 overflow-hidden rounded-3xl">
                <img src={boost.boost_photo_url} alt={boost.name} />
              </div>

              <div className="flex justify-start flex-col">
                <h3 className="text-zinc-300 mb-2 break-words">{boost.name}</h3>
                <p className="text-zinc-400 text-sm mb-2">
                  {boost.boost_bonus}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p
          className={`${s.font} text-zinc-300  break-words tracking-wider text-center p-6 text-sm`}
        >
          You dont have any boosts 😔
        </p>
      )}
    </>
  );
};

export default BoostsModal;
