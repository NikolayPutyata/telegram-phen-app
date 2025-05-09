import { useSelector } from 'react-redux';
import SkinsComponent from '../SkinsComponent/SkinsComponent';
import s from '/src/App.module.css';
import { selectSkinsCollection } from '../../redux/selectors';

const data = {
  imgStarFlight:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774739/Group_67_7_oehn0k.png',
  imgShip:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774739/Group_67_7_oehn0k.png',
  imgComandor:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774853/Group_67_8_fyflff.png',
  planet:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774853/Group_67_8_fyflff.png',
  price: '420',
  plus: '+ 50%',
  styleBorder: `${s.gradientBg} p-[1.2px]`,
  styleImg: 'rounded-3xl',
};
const DiamondCol = () => {
  const skinsCollection = useSelector(selectSkinsCollection);
  const colId = 6;

  const collection = skinsCollection[5];
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

export default DiamondCol;
