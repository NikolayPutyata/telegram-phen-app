import { useSelector } from 'react-redux';
import SkinsComponent from '../SkinsComponent/SkinsComponent';
import s from '/src/App.module.css';
import { selectSkinsCollection } from '../../redux/selectors';

const data = {
  imgStarFlight:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783198/shu5_11zon_oaeidi.webp',
  imgShip:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1742288006/platinumBase_11zon_dooccm.webp',
  imgComandor:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783195/comM_11zon_a5melk.webp',
  planet:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783195/planet4_11zon_m1l0pi.webp',
  price: '420',
  plus: '+ 35%',
  styleBorder: `${s.gradientBg2} p-[1.2px]`,
  styleImg: 'rounded-3xl',
};

const PlatinumCol = () => {
  
    const skinsCollection = useSelector(selectSkinsCollection);
    // const colId = 2;
    // const userId = useSelector(selectUserId);
    const collection = skinsCollection[4];
    const images = collection.images;
  
    return <SkinsComponent {...data} images={images} />;
};

export default PlatinumCol;
