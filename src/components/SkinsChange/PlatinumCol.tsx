import s from '/src/App.module.css';

const PlatinumCol = () => {
  return (
     <div>

      <div className="px-8 pt-5 pb-5 bg-neutral-900 rounded-3xl mx-4 grid grid-cols-2 gap-4">
        <div className={`col-span-2 rounded-3xl  ${s.gradientBg2} p-[1.2px]  overflow-hidden h-44`}><img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783198/shu5_11zon_oaeidi.webp" alt="" className='object-cover w-full h-full rounded-3xl'/></div>
  <div className={`rounded-3xl ${s.gradientBg2} p-[1.2px] overflow-hidden`}><img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774739/Group_67_7_oehn0k.png" alt="" className='object-cover w-full h-full rounded-3xl'/></div>
  <div className='grid grid-cols-2 gap-2 rounded-3xl'>
    <div className={`bg-red-50 rounded-3xl text-black ${s.gradientBg2}  p-[1.2px] overflow-hidden`}><img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783195/comM_11zon_a5melk.webp" alt="" className='object-cover w-full h-full rounded-3xl'/></div>
    <div className={`bg-red-50 rounded-3xl text-black ${s.gradientBg2}  p-[1.2px] overflow-hidden`}><img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783195/planet4_11zon_m1l0pi.webp" alt="" className='object-cover w-full h-full rounded-3xl'/></div>
        </div>
        <div className={`${s.font} flex justify-center text-lg gap-2`}> <span className='flex justify-center items-center gap-1'><div className='flex items-center justify-center'>420</div><img
                src="/assets/Group 61.png"
                alt="Phenerium"
                width={'20px'}
                height={'25px'}
              /></span> <div className='flex items-center justify-center text-gray-400'>+ 35%</div></div>
        <div className='flex flex-col justify-center items-center'>
        <button className='btn btn-primary w-32 rounded-4xl self-center bg-gradient-to-r from-blue-500 to-purple-500'>Claim</button>
      </div>
      </div>
      
    </div>
  )
}

export default PlatinumCol
