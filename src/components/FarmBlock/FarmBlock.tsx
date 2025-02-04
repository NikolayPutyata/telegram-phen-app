import { useSelector } from 'react-redux';
import s from '/src/App.module.css';
import { selectUserTokens } from '../../redux/selectors';

const FarmBlock = () => {
  const tokens = useSelector(selectUserTokens);

  return (
    <div className='my-5'>
      <h2 className={`${s.font} text-zinc-300 ml-4 my-4 mt-8`}>
        Farm PHEN Tokens 💰
      </h2>
      <div className="flex flex-col justify-center px-3 my-3 mb-8">
        <div className="flex flex-col px-6 my-4">
          <div className="flex justify-center items-center">
            <span className={`${s.font} text-zinc-400 text-3xl`}>{tokens}</span>
          </div>
        </div>
        <div className='grid grid-cols-[1fr_1fr] grid-rows-1 items-center justify-center gap-3'>
  <button
    className="btn btn-primary rounded-4xl"
    disabled={false}
  >
    Farm
  </button>
  <button
    className="btn btn-primary rounded-4xl"
    disabled={true}
  >
    Claim
  </button>
</div>

      </div>
    </div>
  )
}

export default FarmBlock
