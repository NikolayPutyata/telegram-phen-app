// import { selectUserSkins } from '../../redux/selectors';
import s from '/src/App.module.css';
// import { useSelector } from 'react-redux';

const SkinsModal = () => {
  // const skins = useSelector(selectUserSkins);

  return (
    <>
      {/* {skins.length > 0 ? <ul className={`${s.font} flex flex-col tracking-wider gap-4`}>

        {skins?.map((skin) => (
          <li className="flex pl-2  gap-8">
            <div className="flex flex-col justify-center w-16 h-16 overflow-hidden rounded-3xl">
              <img src="/assets/shuttle-2.webp" alt="standart avatar" />
            </div>

            <div className="flex justify-start flex-col">
              <h3 className="text-zinc-300 mb-2 break-words">Misterium</h3>
              <p className="text-zinc-400 text-sm mb-2">X3</p>
            </div>
          </li>
        ))}
      </ul> :  */}
      <p
          className={`${s.font} text-zinc-300  break-words tracking-wider text-center p-6 text-sm`}
        >
          You dont have any skins yet 😔
        </p>
       {/* } */}
    </>
  );
};

export default SkinsModal;

