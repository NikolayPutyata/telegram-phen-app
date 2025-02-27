import { useDispatch, useSelector } from 'react-redux';
import BoostsItem from '../../Pages/Leaderbords/BoostsItem';
import { selectCommonBoosts, selectUserId } from '../../redux/selectors';
import s from '/src/App.module.css';
import { paymentInPhenerium } from '../../redux/operations';
import { AppDispatch } from '../../redux/store';


const Boosts = () => {
  const boosts = useSelector(selectCommonBoosts);
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector(selectUserId);

  const handeBuyInPhenerium = async (amount: number, idItem: number, collectionId: number) => {
    const memo = `ORDER_${userId}_${collectionId}_${idItem}`;
    await dispatch(paymentInPhenerium({ memo, amount }));
  };

  return (
    <div className="px-3 mb-32">
  <div className="relative w-full h-44 overflow-hidden rounded-4xl">
    <img
      src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740501205/st_2_11zon_1_rmtwmo.webp"
      alt=""
      className="object-cover w-full h-full"
    />
  </div>
  <h2 className={`${s.font} text-zinc-400 ml-4 text-sm tracking-wider mt-6`}>Farming Boosts</h2>
      

  {boosts?.length > 0 && (
        <div className="my-5 px-3 flex justify-start gap-6">
          <div className="flex flex-col justify-center w-30 h-30 overflow-hidden rounded-3xl">
            <img
              src={boosts[0].boost_photo_url}
              alt={boosts[0].name}
              
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className={`${s.font} text-zinc-200 tracking-wider`}>{boosts[0].name}</h3>
            <p className={`${s.font} text-zinc-500 text-sm`}>{boosts[0].desc}</p>
            <div className="flex items-center gap-1">
              <p className={`${s.font} text-zinc-200 text-sm`}>{boosts[0].price}</p>
              <img
                src="/assets/Group 61.png"
                alt="Phenerium"
                width={'16px'}
                height={'16px'}
              />
            </div>
            <button
              
              className="btn btn-primary w-24 h-8 rounded-4xl mt-1 bg-gradient-to-r from-blue-500 to-purple-500"
              onClick={()=>handeBuyInPhenerium(Number(boosts[0].price), boosts[0].idItem, boosts[0].collectionId)}
              
            >
              Buy
            </button>
          </div>
        </div>
      )}

  <div className="flex my-5 flex-col gap-5">
    <ul className="flex flex-col gap-6">
      {boosts?.slice(1).map((product) => (
        <BoostsItem
          key={product.idItem}
          idItem={product.idItem}
          name={product.name}
          desc={product.desc}
          boost_bonus={product.boost_bonus}
          collectionId={product.collectionId}
          price={product.price}
          boost_photo_url={product.boost_photo_url}
        />
      ))}
    </ul>
  </div>
</div>
    
  );
};

export default Boosts;


