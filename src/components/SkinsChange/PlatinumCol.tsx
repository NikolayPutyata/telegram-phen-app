import SkinsComponent from '../SkinsComponent/SkinsComponent';
import s from '/src/App.module.css';

const data = {
  imgStarFlight:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783198/shu5_11zon_oaeidi.webp',
  imgShip:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1742288006/platinumBase_11zon_dooccm.webp',
  imgComandor:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1742288006/platinumBase_11zon_dooccm.webp',
  planet:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783195/planet4_11zon_m1l0pi.webp',
  price: '420',
  plus: '+ 35%',
  styleBorder: `${s.gradientBg2} p-[1.2px]`,
  styleImg: 'rounded-3xl',
};

const PlatinumCol = () => {
  return <SkinsComponent {...data} />;
};

export default PlatinumCol;
