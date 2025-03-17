import s from '/src/App.module.css';

interface Props {
    text: string;
}
const LoadingUlItem = ({ text }: Props) => {
  return (
      <li className={s.font}>{text}</li>
  )
}

export default LoadingUlItem
