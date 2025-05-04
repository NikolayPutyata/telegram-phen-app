import { useSelector } from 'react-redux';
import SkinsComponent from '../SkinsComponent/SkinsComponent';
import { selectSkinsCollection } from '../../redux/selectors';

const data = {
  imgStarFlight:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774739/Group_67_7_oehn0k.png',
  imgShip:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1742288292/baseBase_11zon_a7myfo.webp',
  imgComandor:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741770392/basic_comandor_11zon_viuhlg.webp',
  planet:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774853/Group_67_8_fyflff.png',
  price: '420',
  plus: '+ 0%',
  styleBorder: 'border-gray-700  border-1',
  styleImg: 'rounded-3xl',
};

const CommonCol = () => {
  const skinsCollection = useSelector(selectSkinsCollection);
  const colId = 1;
  const collection = skinsCollection[0];
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

export default CommonCol;
