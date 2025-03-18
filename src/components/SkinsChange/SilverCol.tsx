import SkinsComponent from '../SkinsComponent/SkinsComponent';

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
  styleBorder: 'border-[#C0C0C0]',
};

const SilverCol = () => {
  return <SkinsComponent {...data} />;
};

export default SilverCol;
