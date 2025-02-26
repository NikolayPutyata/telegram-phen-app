import s from '/src/App.module.css';

function SkinsItem() {
  return (
    <li className="flex px-3 justify-start gap-8">
      <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
        <img src="/assets/shuttle-2.webp" alt="standart avatar" />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className={`${s.font} text-zinc-300 break-words`}>
          Misterium
        </h3>

        <p className={`${s.font} text-zinc-400 text-xs mt-1`}>Desc</p>
        <div className="flex items-center gap-1.5 mt-1">

          <p className={`${s.font} text-zinc-300 text-sm`}>0.3</p>
          <img src="/assets/ton.svg" alt="telegram-star" width={16}/>
        </div>

        <button className="btn btn-primary w-24 h-8 rounded-4xl mt-1">Buy</button>
      </div>
    </li>
  );
}

export default SkinsItem;
