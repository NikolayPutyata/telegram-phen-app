import SkinsItem from '../../Pages/Leaderbords/SkinsItem';
import { selectSkins } from '../../redux/selectors';
import s from '/src/App.module.css';
import { useSelector } from 'react-redux';
// import { createStarInvoice } from '../../utils/createStarInvoice';
// import { getBoostsAndSkins } from '../../redux/operations';
// import { AppDispatch } from '../../redux/store';

const Skins = () => {
  const skins = useSelector(selectSkins);
  // const dispatch = useDispatch<AppDispatch>();
  // const userId = useSelector(selectUserId);

  // const handleBuyClick = async (
  //   name: string,
  //   price: string,
  //   desc: string,
  //   collectionId: number,
  //   idItem: number,
  // ) => {
  //   const invoiceLink = await createStarInvoice({
  //     title: name,
  //     description: desc,
  //     prices: [{ label: 'Price', amount: Number(price) }],
  //     currency: 'XTR',
  //     provider_token: '',
  //     payload: `ORDER_${userId}_${collectionId}_${idItem}`,
  //   });

  //   window.Telegram.WebApp.openInvoice(invoiceLink, async (status) => {
  //     if (status === 'paid') {
  //       await dispatch(getBoostsAndSkins(userId));
  //     }
  //   });
  // };

  return (
    <div className="px-3 mb-32 mt-2 tracking-wider">
      <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
        <img
          src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740560649/cosmo-center_s9spsd.webp"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <h2
        className={`${s.font} text-zinc-400 ml-4 text-sm tracking-wider mt-6`}
      >
        Bronze Collection
      </h2>
      <ul className="flex flex-col gap-6 my-6">
        {skins?.bronzeCollection.map((skin) => (
          <SkinsItem
            key={skin.id}
            id={skin.id}
            imageUrlSmall={skin.skin_photo_url_small}
            price={skin.price}
            name={skin.name}
          />
        ))}
      </ul>

      {/* Silver Collection */}
      {/* <h2
        className={`${s.font} text-zinc-400 ml-4 text-sm tracking-wider my-6`}
      >
        Silver Collection
      </h2>
      <div className="flex px-3 justify-start gap-6">
        <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
          <img
            src={skins.silverCollection[0].skin_photo_url_small}
            alt="silver avatar"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className={`${s.font} text-zinc-300 break-words`}>
            {skins?.silverCollection[0].name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1">
            <p className={`${s.font} text-zinc-300 text-sm`}>
              {skins.silverCollection[0].price}
            </p>
            <img src="/assets/telegram_star.svg" alt="telegram-star" />
          </div>
          <button
            className="btn btn-primary w-24 h-8 rounded-4xl mt-1 bg-gradient-to-r from-blue-500 to-purple-500"
            onClick={() =>
              handleBuyClick(
                skins.silverCollection[0].name,
                skins.silverCollection[0].price,
                skins.silverCollection[0].name,
                1,
                skins.silverCollection[0].id,
              )
            }
          >
            Buy
          </button>
        </div>
      </div>
      <ul className="flex flex-col gap-6 my-6">
        {skins?.silverCollection.slice(1).map((skin) => (
          <SkinsItem
            key={skin.id}
            id={skin.id}
            imageUrlSmall={skin.skin_photo_url_small}
            price={skin.price}
            name={skin.name}
          />
        ))}
      </ul>

      <h2
        className={`${s.font} text-zinc-400 ml-4 text-sm tracking-wider mt-6`}
      >
        Gold Collection
      </h2>
      {skins?.goldCollection.slice(0, 2).map((skin, index) => (
        <div key={skin.id} className="flex px-3 justify-start gap-6 my-6">
          <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
            <img
              src={skin.skin_photo_url_small}
              alt={`gold avatar ${index + 1}`}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className={`${s.font} text-zinc-300 break-words`}>
              {skin.name}
            </h3>

            <div className="flex items-center gap-1.5 mt-1">
              <p className={`${s.font} text-zinc-300 text-sm`}>{skin.price}</p>
              <img src="/assets/telegram_star.svg" alt="telegram-star" />
            </div>
            <button
              className="btn btn-primary w-24 h-8 rounded-4xl mt-1 bg-gradient-to-r from-blue-500 to-purple-500"
              onClick={() =>
                handleBuyClick(skin.name, skin.price, skin.name, 1, skin.id)
              }
            >
              Buy
            </button>
          </div>
        </div>
      ))}
      <ul className="flex flex-col gap-6 my-6">
        {skins?.goldCollection.slice(2).map((skin) => (
          <SkinsItem
            key={skin.id}
            id={skin.id}
            imageUrlSmall={skin.skin_photo_url_small}
            price={skin.price}
            name={skin.name}
          />
        ))}
      </ul>

      <h2
        className={`${s.font} text-zinc-400 ml-4 text-sm tracking-wider mt-6`}
      >
        Platinum Collection
      </h2>
      {skins?.platinumCollection.slice(0, 3).map((skin, index) => (
        <div key={skin.id} className="flex px-3 justify-start gap-6 my-6">
          <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
            <img
              src={skin.skin_photo_url_small}
              alt={`platinum avatar ${index + 1}`}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className={`${s.font} text-zinc-300 break-words`}>
              {skin.name}
            </h3>

            <div className="flex items-center gap-1.5 mt-1">
              <p className={`${s.font} text-zinc-300 text-sm`}>{skin.price}</p>
              <img src="/assets/telegram_star.svg" alt="telegram-star" />
            </div>
            <button
              className="btn btn-primary w-24 h-8 rounded-4xl mt-1 bg-gradient-to-r from-blue-500 to-purple-500"
              onClick={() =>
                handleBuyClick(skin.name, skin.price, skin.name, 1, skin.id)
              }
            >
              Buy
            </button>
          </div>
        </div>
      ))}
      <ul className="flex flex-col gap-6 my-6">
        {skins?.platinumCollection.slice(3).map((skin) => (
          <SkinsItem
            key={skin.id}
            id={skin.id}
            imageUrlSmall={skin.skin_photo_url_small}
            price={skin.price}
            name={skin.name}
          />
        ))}
      </ul>

      <h2
        className={`${s.font} text-zinc-400 ml-4 text-sm tracking-wider mt-6`}
      >
        Diamond Collection
      </h2>
      {skins?.diamondCollection.map((skin, index) => (
        <div key={skin.id} className="flex px-3 justify-start gap-6 my-6">
          <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
            <img
              src={skin.skin_photo_url_small}
              alt={`diamond avatar ${index + 1}`}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className={`${s.font} text-zinc-300 break-words`}>
              {skin.name}
            </h3>

            <div className="flex items-center gap-1.5 mt-1">
              <p className={`${s.font} text-zinc-300 text-sm`}>{skin.price}</p>
              <img src="/assets/telegram_star.svg" alt="telegram-star" />
            </div>
            <button
              className="btn btn-primary w-24 h-8 rounded-4xl mt-1 bg-gradient-to-r from-blue-500 to-purple-500"
              onClick={() =>
                handleBuyClick(skin.name, skin.price, skin.name, 1, skin.id)
              }
            >
              Buy
            </button>
          </div>
        </div>
      ))}*/}
    </div>
  );
};

export default Skins;
