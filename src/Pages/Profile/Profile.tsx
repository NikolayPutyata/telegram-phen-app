import Socials from "../../components/Socials/Socials";
import s from '/src/App.module.css';

const Profile = () => {
  return (

    <div className="flex flex-col items-center bg-neutral-900 rounded-3xl p-3 m-4">
  <div className="avatar">
    <div className="w-24 rounded-full">
      <img src="/assets/avatar.webp" alt="standart avatar" />
    </div>
  </div>
  <h2 className={`${s.font} text-zinc-300 text-center my-3 text-lg tracking-wider`}>NICKNAME</h2>
  <div className="flex justify-between w-full px-4">
    <p className={`${s.font} text-zinc-400 tracking-wider`}>Total tokens</p>
    <p className={`${s.font} text-zinc-400 tracking-wider`}>100 PHEN</p>
  </div>
  <button className="btn w-72 btn-primary my-4">Connect TON Wallet</button>
  <Socials />
</div>

  );
};

export default Profile;
