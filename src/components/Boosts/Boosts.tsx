import BoostsItem from '../../Pages/Leaderbords/BoostsItem';

const Boosts = () => {
  const boosts = [
    {
      imgSrc: '/assets/engine.webp',
      title: 'V3 Engine',
      desc: '2x Farming Boost',
      price: '0.02',
      collectionId: 1,
      idItem: 10,
    },
  ];
  const specialBoosts = [
    {
      imgSrc: '/assets/shuttle-2.webp',
      title: 'Flagship',
      desc: '20x Farming Boost',
      price: '0.20',
      collectionId: 2,
      idItem: 11,
    },
  ];

  return (
    <div className="flex pl-6 my-5 flex-col gap-5">
      <ul className="flex flex-col gap-6">
        {boosts.map((product, index) => (
          <BoostsItem key={index} {...product} />
        ))}
      </ul>

      <ul className="flex flex-col gap-6 mb-32">
        {specialBoosts.map((product, index) => (
          <BoostsItem key={index} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default Boosts;
