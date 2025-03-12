import s from '/src/App.module.css';

const SilverCol = () => {
  return (
    <div className="px-8 pb-5 rounded-3xl mx-4 grid grid-cols-2 gap-4">
  <div className="col-span-2 rounded-3xl border-1 border-[#C0C0C0] overflow-hidden h-44">
    <img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783041/sht3_11zon_jlbihy.webp" alt="" className="object-cover w-full h-full"/>
  </div>
  <div className="rounded-3xl border-1 border-[#C0C0C0] overflow-hidden">
    <img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741774739/Group_67_7_oehn0k.png" alt="" className="object-cover w-full h-full"/>
  </div>
  <div className="grid grid-cols-2 gap-2 rounded-3xl">
    <div className="bg-red-50 rounded-3xl text-black border-1 border-[#C0C0C0] overflow-hidden">
      <img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783042/comS_11zon_d4gn94.webp" alt="" className="object-cover w-full h-full"/>
    </div>
    <div className="bg-red-50 rounded-3xl text-black border-1 border-[#C0C0C0] overflow-hidden">
      <img src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783044/planet3_11zon_kbdrpe.webp" alt="" className="object-cover w-full h-full"/>
    </div>
  </div>
  <div className={`${s.font} flex justify-center text-lg gap-2`}>
    <span className="flex justify-center items-center gap-1">
      <div className="flex items-center justify-center">420</div>
      <img src="/assets/Group 61.png" alt="Phenerium" width="20px" height="25px"/>
    </span>
    <div className="flex items-center justify-center text-gray-400 text-sm">+ 10%</div>
  </div>
  <div className="flex flex-col justify-center items-center">
    <button className='btn btn-primary w-32 rounded-4xl self-center bg-gradient-to-r from-blue-500 to-purple-500'>Claim</button>
  </div>
</div>

  )
}

export default SilverCol
