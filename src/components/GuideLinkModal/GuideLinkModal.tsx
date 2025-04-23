import s from '/src/App.module.css';
import { useTranslation } from 'react-i18next';

const GaideLinkModal = () => {
  const { t } = useTranslation();

  return (
    <ol
      className={`${s.font} list-decimal flex flex-col gap-8 list-inside text-lg text-zinc-300 tracking-wider`}
    >
      <li>
        {t('Open Phenerium')}
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            {t('Open Phenerium, and go to the info menu.')}
          </p>
          <img
            src="/assets/guide/guide-1.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        {t('Find Affiliate Program')}
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            {t("Scroll to 'Affiliate Program' and select one.")}
          </p>
          <img
            src="/assets/guide/guide-2.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        {t('Copy Link')}
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            {t('Locate the referral link and copy it.')}
          </p>
          <img
            src="/assets/guide/guide-3.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>
      <li className="">
        {t("Go to 'Friends'")}
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            {t("Return to Phenerium and go to the 'Friends' section.")}
          </p>
          <img
            src="/assets/guide/guide-4.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>

      <li className="">
        {t('Paste and Done')}
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            {t("Paste the link into the field and press 'Done'.")}
          </p>
          <img
            src="/assets/guide/guide-5.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </li>

      <li className="">
        {t('Get Bonus')}
        <div className="flex flex-col gap-4 px-4">
          <p className="text-sm text-zinc-400">
            {t('Bonus will be credited automatically after submission.')}
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
