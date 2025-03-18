import SkinsItem from '../../Pages/Leaderbords/SkinsItem';
import { selectSkins } from '../../redux/selectors';
import s from '/src/App.module.css';
import { useSelector } from 'react-redux';

const Skins = () => {
  const skins = useSelector(selectSkins);

  return (
    <div className="px-3 mb-32 mt-2 tracking-wider">
      <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
        <img
          src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740560649/cosmo-center_s9spsd.webp"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <h2
        className={`${s.font} text-zinc-400 ml-4 text-sm tracking-wider mt-6`}
      >
        Bronze Collection
      </h2>
      <ul className="flex flex-col gap-6 my-6">
        {skins.commonCollection.map((skin) => (
          <SkinsItem
            key={skin.id}
            id={skin.id}
            imageUrlSmall={skin.skin_photo_url_small}
            price={skin.price}
            bonus={skin.skin_bonus}
            name={skin.name}
          />
        ))}
      </ul>
      <ul className="flex flex-col gap-6 my-6">
        {skins.bronzeCollection.map((skin) => (
          <SkinsItem
            key={skin.id}
            id={skin.id}
            imageUrlSmall={skin.skin_photo_url_small}
            price={skin.price}
            bonus={skin.skin_bonus}
            name={skin.name}
          />
        ))}
      </ul>
      <ul className="flex flex-col gap-6 my-6">
        {skins.silverCollection.map((skin) => (
          <SkinsItem
            key={skin.id}
            id={skin.id}
            imageUrlSmall={skin.skin_photo_url_small}
            price={skin.price}
            bonus={skin.skin_bonus}
            name={skin.name}
          />
        ))}
      </ul>
      <ul className="flex flex-col gap-6 my-6">
        {skins.goldCollection.map((skin) => (
          <SkinsItem
            key={skin.id}
            id={skin.id}
            imageUrlSmall={skin.skin_photo_url_small}
            price={skin.price}
            bonus={skin.skin_bonus}
            name={skin.name}
          />
        ))}
      </ul>
      <ul className="flex flex-col gap-6 my-6">
        {skins.platinumCollection.map((skin) => (
          <SkinsItem
            key={skin.id}
            id={skin.id}
            imageUrlSmall={skin.skin_photo_url_small}
            price={skin.price}
            bonus={skin.skin_bonus}
            name={skin.name}
          />
        ))}
      </ul>
      <ul className="flex flex-col gap-6 my-6">
        {skins.diamondCollection.map((skin) => (
          <SkinsItem
            key={skin.id}
            id={skin.id}
            imageUrlSmall={skin.skin_photo_url_small}
            price={skin.price}
            bonus={skin.skin_bonus}
            name={skin.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default Skins;
