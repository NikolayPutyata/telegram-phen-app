import s from '/src/App.module.css';

type SkinsData = {
  imgZor: string;
  imgCor: string;
  imgCom: string;
  planet: string;
  price: string;
  plus: string;
  styleBorder: string;
};

const SkinsComponent: React.FC<SkinsData> = ({
  imgZor,
  imgCom,
  imgCor,
  planet,
  price,
  plus,
  styleBorder,
}) => {
  return (
    <div className=" rounded-3xl mx-4 grid grid-cols-2 gap-4">
      <div
        className={`${styleBorder} col-span-2 rounded-3xl border-1 overflow-hidden h-44`}
      >
        <img src={imgZor} alt="" className="object-cover w-full h-full" />
      </div>
      <div className={`${styleBorder} rounded-3xl border-1 overflow-hidden`}>
        <img src={imgCor} alt="" className="object-cover w-full h-full" />
      </div>

      <div className="grid grid-cols-2 gap-2 rounded-3xl">
        <div
          className={`${styleBorder} bg-red-50 rounded-3xl  border-1  overflow-hidden`}
        >
          <img src={imgCom} alt="" className="object-cover w-full h-full" />
        </div>
        <div
          className={`${styleBorder} bg-red-50 rounded-3xl  border-1 overflow-hidden`}
        >
          <img src={planet} alt="" className="object-cover w-full h-full" />
        </div>
      </div>

      <div className={`${s.font} flex justify-center text-lg gap-3`}>
        <span className="flex justify-center items-center gap-1">
          <div className="flex items-center justify-center">{price}</div>
          <img
            src="/assets/Group61.png"
            alt="Phenerium"
            width={'20px'}
            height={'25px'}
          />
        </span>

        <div className="flex items-center justify-center text-gray-400 text-sm">
          {plus}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <button className="btn btn-primary w-full rounded-4xl self-center bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient">
          Claim
        </button>
      </div>
    </div>
  );
};

export default SkinsComponent;
