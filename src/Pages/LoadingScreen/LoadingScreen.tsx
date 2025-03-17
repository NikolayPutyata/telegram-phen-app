import LoadingUlItem from './LoadingUlItem';
import s from '/src/App.module.css';

const LoadingScreen = () => {
  return (
    <div className="bg-black flex flex-col p-5 min-h-screen gap-10">
      <div className="flex flex-col items-center gap-8 pt-10">
        <img src="/assets/logoLoading.svg" alt="" width={100} />
        <h2 className={`${s.font} text-lg`}>Roadmap</h2>
      </div>
      <ul className="flex flex-col gap-5 ml-7">
        <LoadingUlItem text={"Step 1"} />
        <LoadingUlItem text={"Step 2"} />
        <LoadingUlItem text={"Step 3"} />
        <LoadingUlItem text={"Step 4"} />
              <LoadingUlItem text={"Step 5"} />
              <LoadingUlItem text={"Step 6"} />
        <LoadingUlItem text={"Step 7"} />
      </ul>

      <div className="fixed bottom-16 left-0 right-0 flex justify-center">
        <progress className="progress progress-info w-56" value="70" max="100"></progress>
      </div>
    </div>
  );
};

export default LoadingScreen;
