import SpecialItem from '../../Pages/Leaderbords/SpecialItem';
// import { useSelector } from 'react-redux';

const Special = () => {
  // const specials = useSelector(selectSpecialId);

  return (
    <div className="px-8 mb-5 tracking-wider">
      <ul className="flex flex-col gap-6">
        {/* {specials.map((special) => ( */}
        <SpecialItem />
        {/* ))} */}
      </ul>
    </div>
  );
};

export default Special;
