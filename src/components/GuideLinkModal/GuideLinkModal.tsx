import s from '/src/App.module.css';

const GaideLinkModal = () => {
  return (
    <ol
      className={`${s.font} list-decimal flex flex-col gap-8 list-inside text-lg text-zinc-300 tracking-wider`}
    >
      <li>
        Go to Phenerium
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            Open Phenerium, go to the information menu.
          </p>
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261781/friends_yda58q.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        Find an affiliate program
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            Scroll down to the "Affiliate Program" section, click on an
            available affiliate program to open its details.
          </p>
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261781/friends_yda58q.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        Copy the link
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            Find the referral link, click "Copy" or hold to copy.
          </p>
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261781/friends_yda58q.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        Go to the "Friends" tab
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            In Phenerium, click the "Play" button to activate the next step,
            select the "Friends" section.
          </p>
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1739261781/friends_yda58q.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        Paste the link and send
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">Go to Telegram settings</p>
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
