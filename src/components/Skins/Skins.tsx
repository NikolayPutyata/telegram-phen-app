import SkinsItem from '../../Pages/Leaderbords/SkinsItem';
import s from '/src/App.module.css';
// import { useSelector } from 'react-redux';

const Skins = () => {
  // const skins = useSelector(selectSkinsId);

  const skinsItems = {
    skins: [{
            id: 1,
            title: 'Massdone',
            price: "0.50",
            description: 'Starlight war shuttle',
            imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740562238/ship_2_11zon_joktnl.webp',
            collectionId: 2
    },
      {
            id: 2,
            title: 'Victorian',
            price: "0.70",
            description: 'Starlight war shuttle',
            imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740562747/ship_1_11zon_nx6e4m.webp',
            collectionId: 2
      },
      {
            id: 3,
            title: 'Neptune',
            price: "0.20",
            description: 'Starlight war shuttle',
            imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740562747/ship_4_11zon_ws4fim.webp',
            collectionId: 2
      },
      {
            id: 4,
            title: 'Maverick',
            price: "0.10",
            description: 'Starlight war shuttle',
            imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740562747/ship_3_11zon_dxvq98.webp',
            collectionId: 2
        }
        ]
  };

  return (
    <div className="px-3 mb-32 mt-2 tracking-wider">
      <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740560649/cosmo-center_s9spsd.webp"
            alt=""
            className="object-cover w-full h-full"
          />
      </div>
      <h2 className={`${s.font} text-zinc-400 ml-4 text-sm tracking-wider mt-6`}>Shuttles</h2>
      <ul className="flex flex-col gap-6 my-6">
        {skinsItems.skins.map((skin) => (
          <SkinsItem
          key={skin.id}
                            id={skin.id}
                            description={skin.description}
                            title={skin.title}
                            imageUrl={skin.imageUrl}
                            price={skin.price}
                            collectionId={skin.collectionId}/>
        ))}
      </ul>
    </div>
  );
};

export default Skins;
