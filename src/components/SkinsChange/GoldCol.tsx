import { useSelector } from 'react-redux';
import SkinsComponent from '../SkinsComponent/SkinsComponent';
import { selectSkinsCollection } from '../../redux/selectors';
import s from '/src/App.module.css';

const data = {
  imgStarFlight:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740682767/shut_11zon_g5onzi.webp',
  imgShip:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740926028/gold_station_clq1ri.webp',
  imgComandor:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740682426/comandor_1_1_11zon_oxopsf.webp',
  planet:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740682664/planet_4_11_11zon_ufeya7.webp',
  price: '420',
  plus: '+ 20%',
  styleBorder: `${s.gradientBg3} p-[1.2px]`,
};

const GoldCol = () => {
  const skinsCollection = useSelector(selectSkinsCollection);
  const colId = 4;

  const collection = skinsCollection[3];
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

export default GoldCol;
