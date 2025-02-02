import s from '/src/App.module.css';

const Friends = () => {
    return (
      <><div className="px-3 mb-3">
        <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
          <img
            src="/assets/friends.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className={`${s.font} text-zinc-300 text-center my-4 tracking-wider`}>Invite friends and get 500 PHEN for each!</h2>
        </div>
        {/* <div className="flex flex-col justify-center gap-5 items-center my-4">
          <p className={`${s.font} text-zinc-400 text-sm`}>No friends yet 😔</p>
        </div> */}
        <div className="px-3 mb-3">
          <div className='bg-neutral-900 rounded-3xl w-full p-3 my-4'>
            
            <ul className='flex flex-col gap-3'>
              <li className='flex justify-between px-8'><p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>Victor</p><p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>300 PHEN</p></li>
              <li className='flex justify-between px-8'><p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>Stepan</p><p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>500 PHEN</p></li>
              <li className='flex justify-between px-8'><p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>Petya</p><p className={`${s.font} text-zinc-400 text-sm tracking-wider`}>20 PHEN</p></li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className="btn btn-wide bg-gray-100 text-black rounded-3xl">Invate</button>
        </div>
        
        </>
      
  )
}

export default Friends
