import s from '/src/App.module.css';

const Friends = () => {
  return (
      <div className="flex flex-col justify-center gap-5 items-center">
          <h2 className={`${s.font} text-zinc-300`}>Invite friends and get 500 PHEN for each!</h2>
          <p className={`${s.font} text-zinc-400 text-sm`}>No friends yet 😔</p>
      <button className="btn btn-wide bg-gray-100 text-black rounded-3xl">Invate</button>
    </div>
  )
}

export default Friends
