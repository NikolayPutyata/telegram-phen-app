import s from '/src/App.module.css';

const GoldCol = () => {
  return (
    <div>
      

      <div className="px-8 pt-5 pb-5 bg-neutral-900 rounded-3xl mx-4 grid grid-cols-2 gap-4">
  <div className='col-span-2 rounded-3xl border-1 border-amber-400 overflow-hidden h-44'><img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740682767/shut_11zon_g5onzi.webp" alt="" className='object-cover w-full h-full'/></div>
  <div className='rounded-3xl border-1 border-amber-400 overflow-hidden'><img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740926028/gold_station_clq1ri.webp" alt="" className='object-cover w-full h-full'/></div>
  <div className='grid grid-cols-2 gap-2 rounded-3xl'>
    <div className='bg-red-50 rounded-3xl text-black border-1 border-amber-400  overflow-hidden'><img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740682426/comandor_1_1_11zon_oxopsf.webp" alt="" className='object-cover w-full h-full'/></div>
    <div className='bg-red-50 rounded-3xl text-black border-1 border-amber-400 overflow-hidden'><img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740682664/planet_4_11_11zon_ufeya7.webp" alt="" className='object-cover w-full h-full'/></div>
        </div>
        <div className={`${s.font} flex justify-center text-lg gap-2`}> <span className='flex justify-center items-center gap-1'><div className='flex items-center justify-center'>420</div><img
                src="/assets/Group 61.png"
                alt="Phenerium"
                width={'20px'}
                height={'25px'}
              /></span> <div className='flex items-center justify-center'>+ 25%</div></div>
        <div className='flex flex-col justify-center items-center'>
        <button className='btn btn-primary w-32 rounded-4xl self-center bg-gradient-to-r from-blue-500 to-purple-500'>Claim</button>
      </div>
      </div>
      
    </div>
  )
}

export default GoldCol
