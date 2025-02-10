import s from '/src/App.module.css';

const PresaleBlock = () => {
  return (
    <div className='my-5'>
      <h2 className={`${s.font} text-zinc-300 ml-4 my-4`}>
        Presale 🚀
      </h2>
      
      <div className="flex flex-col justify-center px-3 my-8">
        <div className="flex flex-col px-6 my-4">
          <div className="flex justify-between ">
            <p className={`${s.font} text-zinc-400 `}>Presale price</p>
            
            <p className={`${s.font} text-zinc-400  tracking-wider`}>
              $0.0015
            </p>
          </div>
          <div className='mt-4 mb-3 flex justify-center items-center'><input type="text" placeholder="PHEN" className="input input-primary rounded-4xl py-4" /></div>
        </div>
        <button className="btn btn-primary w-56 rounded-4xl self-center">
          Buy
        </button>
      </div>
    </div>
  )
}

export default PresaleBlock
