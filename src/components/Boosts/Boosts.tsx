import BoostsItem from '../../Pages/Leaderbords/BoostsItem';
import s from '/src/App.module.css';

const Boosts = () => {
  const boosts = [
    {
      imgSrc: '/assets/engine.webp',
      title: 'V3 Engine',
      desc: '2x Farming Boost',
      price: '0.02',
      collectionId: 1,
      idItem: 10
    }
  ];
  const specialBoosts = [
    {
      imgSrc: '/assets/shuttle-2.webp',
      title: 'Flagship',
      desc: '20x Farming Boost',
      price: '0.20',
      collectionId: 2,
      idItem: 11
    }
  ];


  return (
    <>
      <h2 className={`${s.font} text-zinc-300 ml-8 my-3`}>Boosts ⭐</h2>
      <ul className="flex flex-col gap-6">
        {boosts.map((product, index) => (
          <BoostsItem key={index} {...product} />
        ))}
      </ul>
      <h2 className={`${s.font} text-zinc-300 ml-8 my-6 items-center`}>
        Special Boosts 👑
      </h2>
      <ul className="flex flex-col gap-6 mb-32">
        {specialBoosts.map((product, index) => (
          <BoostsItem key={index} {...product} />
        ))}
      </ul>
    </>
  );
};

export default Boosts;
