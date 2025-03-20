import s from '/src/App.module.css';

const TelegramLinkForm = () => {
  return (
    <form className="mb-4 grid grid-cols-[4fr_1fr] gap-3 items-center w-full px-7">
      <input
        type="text"
        className={`${s.font} text-sm rounded-3xl px-5 py-1 w-full`}
      />
      <button
        type="submit"
        className="btn btn-outline btn-sm rounded-3xl px-5 py-4"
      >
        Done
      </button>
    </form>
  );
};

export default TelegramLinkForm;
