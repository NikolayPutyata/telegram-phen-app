import s from '/src/App.module.css';

interface SkinsItemProps {
  id: number;
  name: string;
  imageUrl: string;
  price: string;
  bonus: number;
}

function SkinsItem({  imageUrl, price, id, bonus, name  }: SkinsItemProps) {
  return (
    <li className="flex px-3 justify-start gap-6">
      <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
        <img src={imageUrl} alt="standart avatar" />
      </div>
      <p>{id}</p>
      <div className="flex flex-col gap-1">
        <h3 className={`${s.font} text-zinc-300 break-words`}>
          {name}
        </h3>

        <p className={`${s.font} text-zinc-400 text-xs mt-1`}>{bonus}</p>
        <div className="flex items-center gap-1.5 mt-1">

          <p className={`${s.font} text-zinc-300 text-sm`}>{price}</p>
          <img src="/assets/ton.svg" alt="telegram-star" width={16}/>
        </div>

        <button className="btn btn-primary w-24 h-8 rounded-4xl mt-1 bg-gradient-to-r from-blue-500 to-purple-500">Buy</button>
      </div>
    </li>
  );
}

export default SkinsItem;
