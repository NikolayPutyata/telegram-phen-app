import { useSelector } from 'react-redux';
import SpecialCaseItem from '../../Pages/Leaderbords/SpecialCaseItem';
import SpecialRobotItem from '../../Pages/Leaderbords/SpecialRobotItem';
import s from '/src/App.module.css';
// import CasesOpen from '../CasesOpen/CasesOpen';
import { selectFarmingCycle, selectCaseBoosts } from '../../redux/selectors';

interface robotsItem {
  id: number;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  collectionId: number;
}

const robots: robotsItem[] = [
  {
    id: 5,
    title: 'X2VR',
    price: '1',
    description: 'Increases the farming cycle to 12 h.',
    imageUrl:
      'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740498348/robot_2_eddxh1.webp',
    collectionId: 5,
  },
  {
    id: 6,
    title: 'X5TP',
    price: '2',
    description: 'Increases the farming cycle to 24 h.',
    imageUrl:
      'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740498348/robot_1_11zon_e9jnzk.webp',
    collectionId: 5,
  },
];

const Special = () => {
  const farmingCycle = useSelector(selectFarmingCycle);
  const caseBoosts = useSelector(selectCaseBoosts);

  const getShowBuyButton = (robotId: number) => {
    if (farmingCycle === 24) return false;
    if (farmingCycle === 12) return robotId === 6;
    if (farmingCycle === 8) return true;
  };

  return (
    <div className="px-3 mb-32 mt-2 tracking-wider">
      <div className="relative w-full h-44 overflow-hidden rounded-4xl">
        <img
          src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389388/sklad_hustzi.webp"
          alt="Warehouse"
          className="object-cover w-full h-full"
        />
      </div>

      <section className="mt-6">
        <h2
          className={`${s.font} text-zinc-400 ml-4  mt-6 mb-6 text-sm tracking-wider`}
        >
          Cases
        </h2>
        <ul className="flex flex-col gap-6 ">
          {caseBoosts.map((case) => (
            <SpecialCaseItem
              key={case.id}
              caseBoosts={case}
            />
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2
          className={`${s.font} text-zinc-400 ml-4 mt-9 mb-6 text-sm tracking-wider`}
        >
          Robot Assistants
        </h2>
        <ul className="flex flex-col gap-6 ">
          {robots.map((special) => (
            <SpecialRobotItem
              key={special.id}
              id={special.id}
              description={special.description}
              title={special.title}
              imageUrl={special.imageUrl}
              price={special.price}
              collectionId={special.collectionId}
              showBuyButton={getShowBuyButton(special.id)}
            />
          ))}
        </ul>
      </section>
      {/* <CasesOpen /> */}
    </div>
  );
};

export default Special;
