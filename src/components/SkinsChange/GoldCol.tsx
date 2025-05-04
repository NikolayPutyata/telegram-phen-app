import { useSelector } from 'react-redux';
import SkinsComponent from '../SkinsComponent/SkinsComponent';
import { selectSkinsCollection } from '../../redux/selectors';

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
  styleBorder: 'border-amber-400 border-1',
};

const GoldCol = () => {
  const skinsCollection = useSelector(selectSkinsCollection);
  // const colId = 2;
  // const userId = useSelector(selectUserId);
  const collection = skinsCollection[3];
  const images = collection.images;

  return <SkinsComponent {...data} images={images} />;
};

export default GoldCol;
