import SkinsComponent from '../SkinsComponent/SkinsComponent';
import s from '/src/App.module.css';

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
  return <SkinsComponent {...data} />;
};

export default DiamondCol;
