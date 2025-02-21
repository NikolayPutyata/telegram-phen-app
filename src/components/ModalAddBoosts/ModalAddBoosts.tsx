// import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import BoostsItem from '../../Pages/Leaderbords/BoostsItem';
import { selectUserBoosts } from '../../redux/selectors';
import s from '/src/App.module.css';

const ModalAddBoosts = () => {
  // const { t } = useTranslation();
  const addBoosts = useSelector(selectUserBoosts);

  return;
  <>
    <h2 className={`${s.font} text-zinc-300 ml-8 my-3`}>Boosts ⭐</h2>
    <ul className="flex flex-col gap-6">
      {addBoosts.map((product, index) => (
        <BoostsItem key={index} {...product} />
      ))}
    </ul>
  </>;
};

export default ModalAddBoosts;
