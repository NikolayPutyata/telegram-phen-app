import SkinsComponent from '../SkinsComponent/SkinsComponent';

const data = {
  imgStarFlight:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774739/Group_67_7_oehn0k.png',
  imgShip:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774739/Group_67_7_oehn0k.png',
  imgComandor:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774853/Group_67_8_fyflff.png',
  planet:
    'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774853/Group_67_8_fyflff.png',
  price: '420',
  plus: '+ 50%',
  styleBorder: '${s.gradientBg}',
};
const DiamondCol = () => {
  return <SkinsComponent {...data} />;

  // return (
  //   <div>
  //     <div className="  rounded-3xl mx-4 grid grid-cols-2 gap-4">
  //       <div
  //         className={`col-span-2 rounded-3xl  ${s.gradientBg} p-[1.2px]  overflow-hidden h-44`}
  //       >
  //         <img
  //           src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774739/Group_67_7_oehn0k.png"
  //           alt=""
  //           className="object-cover w-full h-full rounded-3xl"
  //         />
  //       </div>
  //       <div
  //         className={`rounded-3xl ${s.gradientBg} p-[1.2px] overflow-hidden`}
  //       >
  //         <img
  //           src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774739/Group_67_7_oehn0k.png"
  //           alt=""
  //           className="object-cover w-full h-full rounded-3xl"
  //         />
  //       </div>
  //       <div className="grid grid-cols-2 gap-2 rounded-3xl">
  //         <div
  //           className={`bg-red-50 rounded-3xl  ${s.gradientBg}  p-[1.2px] overflow-hidden`}
  //         >
  //           <img
  //             src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774853/Group_67_8_fyflff.png"
  //             alt=""
  //             className="object-cover w-full h-full rounded-3xl"
  //           />
  //         </div>
  //         <div
  //           className={`bg-red-50 rounded-3xl  ${s.gradientBg}  p-[1.2px] overflow-hidden`}
  //         >
  //           <img
  //             src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774853/Group_67_8_fyflff.png"
  //             alt=""
  //             className="object-cover w-full h-full rounded-3xl"
  //           />
  //         </div>
  //       </div>
  //       <div className={`${s.font} flex justify-center text-lg gap-3`}>
  //         {' '}
  //         <span className="flex justify-center items-center gap-1">
  //           <div className="flex items-center justify-center">420</div>
  //           <img
  //             src="/assets/Group61.png"
  //             alt="Phenerium"
  //             width={'20px'}
  //             height={'25px'}
  //           />
  //         </span>{' '}
  //         <div className="flex items-center justify-center text-gray-400 text-sm">
  //           + 50%
  //         </div>
  //       </div>
  //       <div className="flex flex-col justify-center items-center">
  //         <button className="btn btn-primary w-full rounded-4xl self-center bg-gradient-to-r from-blue-500 to-purple-500">
  //           Claim
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default DiamondCol;
