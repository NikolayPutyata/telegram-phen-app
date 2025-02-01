import s from '/src/App.module.css';

const FarmBlock = () => {
  return (
    <div>
      <h2 className={`${s.font} text-zinc-300 ml-4 my-4 mt-8`}>
        Farm PHEN Tokens 💰
      </h2>
      <div className="flex flex-col justify-center px-3 my-3 mb-8">
        <div className="flex flex-col px-6 mb-4">
          <div className="flex justify-center items-center">
            <span className={`${s.font} text-zinc-400 text-3xl`}>0</span>
          </div>
        </div>
        <button
          className="btn btn-primary w-56 rounded-4xl self-center"
          disabled={false}
        >
          Farm
        </button>
      </div>
    </div>
  )
}

export default FarmBlock
