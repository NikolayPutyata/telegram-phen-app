import s from '/src/App.module.css';

type SkinsData = {
  imgStarFlight: string;
  imgShip: string;
  imgComandor: string;
  planet: string;
  price: string;
  plus: string;
  styleBorder: string;
  styleImg?: string;
  images: boolean[];
};

const SkinsComponent: React.FC<SkinsData> = ({
  imgStarFlight,
  imgShip,
  imgComandor,
  planet,
  price,
  plus,
  styleBorder,
  styleImg,
  images,
}) => {
  const renderImage = (src: string, isCollected: boolean) => {
    if (isCollected) {
      return (
        <img
          src={src}
          alt=""
          className={`object-cover ${styleImg} w-full h-full`}
        />
      );
    }
    return (
      <img
        src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774739/Group_67_7_oehn0k.png"
        alt=""
        className={`object-cover ${styleImg} w-full h-full`}
      />
    );
  };

  return (
    <div className="rounded-3xl mx-4 grid grid-cols-2 gap-4">
      <div
        className={`${styleBorder} col-span-2 rounded-3xl overflow-hidden h-44`}
      >
        {renderImage(imgStarFlight, images[0])}
      </div>

      <div className={`${styleBorder} rounded-3xl overflow-hidden`}>
        {renderImage(imgShip, images[1])}
      </div>

      <div className="grid grid-cols-2 gap-2 rounded-3xl">
        <div className={`${styleBorder} bg-red-50 rounded-3xl overflow-hidden`}>
          {renderImage(imgComandor, images[2])}
        </div>
        <div className={`${styleBorder} bg-red-50 rounded-3xl overflow-hidden`}>
          {renderImage(planet, images[3])}
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
        <button className="btn btn-primary w-full rounded-4xl self-center bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient disabled:opacity-50">
          Claim
        </button>
      </div>
    </div>
  );
};

export default SkinsComponent;
