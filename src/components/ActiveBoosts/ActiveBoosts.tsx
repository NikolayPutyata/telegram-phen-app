// import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUserActiveBoosts } from '../../redux/selectors';

const ActiveBoosts = () => {
  //   const { t } = useTranslation();
  const activeBoosts = useSelector(selectUserActiveBoosts);

  return <div></div>;
};

export default ActiveBoosts;
