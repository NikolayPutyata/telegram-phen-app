import s from '/src/App.module.css';

const GaideLinkModal = () => {
  return (
    <ol
      className={`${s.font} list-decimal flex flex-col gap-8 list-inside text-xl text-zinc-300 tracking-wider`}
    >
      <li>
        Step one
        <div className="flex flex-col gap-4 px-4">
          <p className="text-base text-zinc-400">Go to Telegram settings</p>
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261781/friends_yda58q.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        Step two
        <div className="flex flex-col gap-4 px-4">
          <p className="text-base text-zinc-400">Go to Telegram settings</p>
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261781/friends_yda58q.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        Step three
        <div className="flex flex-col gap-4 px-4">
          <p className="text-base text-zinc-400">Go to Telegram settings</p>
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261781/friends_yda58q.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        Step four
        <div className="flex flex-col gap-4 px-4">
          <p className="text-base text-zinc-400">Go to Telegram settings</p>
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261781/friends_yda58q.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        Step five
        <div className="flex flex-col gap-4 px-4">
          <p className="text-base text-zinc-400">Go to Telegram settings</p>
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261781/friends_yda58q.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
    </ol>
  );
};

export default GaideLinkModal;
