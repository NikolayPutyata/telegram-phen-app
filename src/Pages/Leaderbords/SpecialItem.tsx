import s from '/src/App.module.css';

function SpecialItem() {
  return (
    <li className="flex px-3  justify-start gap-8">
      <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
        <img src="/assets/shuttle-2.webp" alt="standart avatar" />
      </div>

      <div className="flex flex-col">
        <h3 className={`${s.font} text-zinc-300 mb-3  break-words`}>
          Misterium
        </h3>
        <div className="flex items-center gap-1 mb-4">
          <p className={`${s.font} text-zinc-400 text-sm`}>100</p>
          <img src="/assets/telegram_star.svg" alt="telegram-star" />
        </div>
        <button className="btn btn-primary w-24 h-9">Buy</button>
      </div>
    </li>
  );
}

export default SpecialItem;
