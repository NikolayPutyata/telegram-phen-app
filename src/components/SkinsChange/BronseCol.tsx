import SkinsComponent from '../SkinsComponent/SkinsComponent';

const data = {
  imgStarFlight:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741782887/shut1_11zon_kaqreh.webp',
  imgShip:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1742288006/bronzeBase_11zon_slx4lp.webp',
  imgComandor:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741782887/com_11zon_halzjs.webp',
  planet:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741782889/planet1_11zon_jnb5cd.webp',
  price: '420',
  plus: '+ 5%',
  styleBorder: 'border-[#cd7f32] border-1',
};

const BronseCol = () => {
  return <SkinsComponent {...data} />;
};

export default BronseCol;
