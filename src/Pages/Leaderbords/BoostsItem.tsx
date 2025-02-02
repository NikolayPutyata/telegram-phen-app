import s from '/src/App.module.css';
type BoostsItemProps = {
  imgSrc: string; 
  title: string; 
  desc: string; 
  price: string; 
};

const BoostsItem: React.FC<BoostsItemProps> = ({ imgSrc, title, desc, price }) => (
  <li className="flex justify-center px-3 gap-7">
    <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
      <img src={imgSrc} alt={title} className="object-cover w-full h-full" />
    </div>
    <div className="flex justify-start flex-col">
      <h3 className={`${s.font} text-zinc-300 mb-3 break-words`}>{title}</h3>
            <p className={`${s.font} text-zinc-400 text-sm`}>{desc}</p>
            <p className={`${s.font} text-zinc-400 text-sm mb-2`}>{price}</p>
      <button className="btn btn-primary w-24 h-9">Buy</button>
    </div>
  </li>
);

export default BoostsItem;