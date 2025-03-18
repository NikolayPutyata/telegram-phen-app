import SkinsComponent from '../SkinsComponent/SkinsComponent';

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
};

const CommonCol = () => {
  return <SkinsComponent {...data} />;
};

export default CommonCol;
