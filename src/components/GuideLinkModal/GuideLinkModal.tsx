import s from '/src/App.module.css';

const GaideLinkModal = () => {
  return (
    <ol
      className={`${s.font} list-decimal flex flex-col gap-8 list-inside text-lg text-zinc-300 tracking-wider`}
    >
      <li>
        Open Phenerium
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            Open Phenerium, and go to the info menu.
          </p>
          <img
            src="/assets/guide/guide-1.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        Find Affiliate Program
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            Scroll to "Affiliate Program" and select one.
          </p>
          <img
            src="/assets/guide/guide-2.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        Copy Link
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            Locate the referral link and copy it.
          </p>
          <img
            src="/assets/guide/guide-3.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        Go to "Friends"
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            Return to Phenerium and go to the 'Friends' section.
          </p>
          <img
            src="/assets/guide/guide-4.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>

      <li className="">
        Paste and Done
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            Paste the link into the field and press "Done".
          </p>
          <img
            src="/assets/guide/guide-5.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>

      <li className="">
        Get Bonus
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            Bonus will be credited automatically after submission.
          </p>
          <img
            src="/assets/guide/guide-6.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
    </ol>
  );
};

export default GaideLinkModal;
