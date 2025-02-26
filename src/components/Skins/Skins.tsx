import SkinsItem from '../../Pages/Leaderbords/SkinsItem';
// import { useSelector } from 'react-redux';

const Skins = () => {
  // const skins = useSelector(selectSkinsId);

  return (
    <div className="px-3 mb-32 mt-2 tracking-wider">
      <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740560649/cosmo-center_s9spsd.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      <ul className="flex flex-col gap-6 my-6">
        {/* {skins.map((skin) => ( */}
        <SkinsItem />
        {/* ))} */}
      </ul>
    </div>
  );
};

export default Skins;
