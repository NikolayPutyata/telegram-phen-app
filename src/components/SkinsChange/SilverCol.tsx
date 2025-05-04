import { useSelector } from 'react-redux';
import SkinsComponent from '../SkinsComponent/SkinsComponent';
import { selectSkinsCollection } from '../../redux/selectors';
import s from '/src/App.module.css';

const data = {
  imgStarFlight:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783041/sht3_11zon_jlbihy.webp',
  imgShip:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1742288006/silverBase_11zon_jdybwi.webp',
  imgComandor:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783042/comS_11zon_d4gn94.webp',
  planet:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783044/planet3_11zon_kbdrpe.webp',
  price: '420',
  plus: '+ 10%',
  styleBorder: `${s.gradientBg4} p-[1.2px]`,
  styleImg: 'rounded-3xl',
};

const SilverCol = () => {
  const skinsCollection = useSelector(selectSkinsCollection);
  const colId = 3;

  const collection = skinsCollection[2];
  const images = collection.images;

  const collectedIndexes = images
    .map((isCollected, index) => (isCollected ? index : null))
    .filter((index) => index !== null);

  return (
    <SkinsComponent
      {...data}
      images={images}
      collectedIndexes={collectedIndexes}
      colId={colId}
    />
  );
};

export default SilverCol;
