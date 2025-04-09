import { useSelector } from 'react-redux';
import SpecialCaseItem from '../../Pages/Leaderbords/SpecialCaseItem';
import SpecialRobotItem from '../../Pages/Leaderbords/SpecialRobotItem';
import s from '/src/App.module.css';
import {
  selectFarmingCycle,
  selectCaseBoosts,
  selectRobot,
} from '../../redux/selectors';

const Special = () => {
  const farmingCycle = useSelector(selectFarmingCycle);
  const caseBoosts = useSelector(selectCaseBoosts);
  const robots = useSelector(selectRobot);

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
          {caseBoosts.map((caseItem) => (
            <SpecialCaseItem key={caseItem.id} caseBoosts={caseItem} />
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
    </div>
  );
};

export default Special;
