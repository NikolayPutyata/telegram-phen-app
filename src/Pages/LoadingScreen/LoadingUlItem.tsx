import s from '/src/App.module.css';
import { SlArrowLeft } from 'react-icons/sl';

interface Props {
  text: string;
  showArrow?: boolean;
  textColor?: string;
}

const LoadingUlItem = ({ text, showArrow = false, textColor }: Props) => {
  return (
    <div className="flex gap-2 items-center ">
      <li className={`${s.font} tracking-wider`} style={{ color: textColor }}>
        {text}
      </li>
      {showArrow && <SlArrowLeft color={'#00bafe'} />}
    </div>
  );
};

export default LoadingUlItem;
