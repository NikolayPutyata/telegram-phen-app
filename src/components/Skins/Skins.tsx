import SkinsItem from '../../Pages/Leaderbords/SkinsItem';
// import { useSelector } from 'react-redux';

const Skins = () => {
  // const skins = useSelector(selectSkinsId);

  return (
    <div className="pl-8 mb-5 tracking-wider">
      <ul className="flex flex-col gap-6">
        {/* {skins.map((skin) => ( */}
        <SkinsItem />
        {/* ))} */}
      </ul>
    </div>
  );
};

export default Skins;
