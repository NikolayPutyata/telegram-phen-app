import s from '/src/App.module.css';

const AirdropBlock = () => {
  return (
    <div>
      <h2 className={`${s.font} text-zinc-300 ml-4 my-4`}>
        Airdrop 🎁
      </h2>
      <div className="flex flex-col px-6 mb-3">
        <div className="relative w-full h-44 overflow-hidden rounded-4xl mb-3">
          <img
            src="/assets/airdrop.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <p className={`${s.font} text-zinc-400 text-center mb-3 tracking-wider`}>
          To participate in the airdrop, purchase tokens worth $50 during the presale.
        </p>
        <button
          className="btn btn-primary w-56 rounded-4xl self-center"
          disabled={true}
        >
          Join the Airdrop
        </button>
      </div>
    </div>
  )
}

export default AirdropBlock
