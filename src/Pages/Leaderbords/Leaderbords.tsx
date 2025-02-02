import BoostsItem from './BoostsItem';
import s from '/src/App.module.css';

const Leaderboards = () => {
  const boosts = [
    { imgSrc: "/assets/engine.webp", title: "V3 Engine", desc: "2x Farming Boost", price: "0.02 TON" },
    { imgSrc: "/assets/commandor.webp", title: "Co-pilot", desc: "4x Farming Boost", price: "0.04 TON" },
    { imgSrc: "/assets/rangers.webp", title: "Ranger Team", desc: "8x Farming Boost", price: "0.08 TON" },
  ];
  const specialBoosts = [
  { imgSrc: "/assets/shuttle-2.webp", title: "Flagship", desc: "20x Farming Boost", price: "0.20 TON" },
    { imgSrc: "/assets/shuttle-1.webp", title: "Space Cruiser", desc: "15x Farming Boost", price: "0.15 TON" },
    
    { imgSrc: "/assets/shuttle-3.webp", title: "Shuttle", desc: "10x Farming Boost", price: "0.10 TON" },
  ];

  return (
    <div>
      <h2 className={`${s.font} text-zinc-300 ml-8 my-3`}>Boosts ⭐</h2>
      <ul className="flex flex-col gap-6">
        {boosts.map((product, index) => (
          <BoostsItem key={index} {...product} />
        ))}
      </ul>
      <h2 className={`${s.font} text-zinc-300 ml-8 my-6 items-center`}>Special Boosts 👑</h2>
      <ul className="flex flex-col gap-6 mb-32">
        {specialBoosts.map((product, index) => (
          <BoostsItem key={index} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default Leaderboards;