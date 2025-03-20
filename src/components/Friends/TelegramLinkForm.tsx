import s from '/src/App.module.css';
import { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRefLink, selectUserId } from '../../redux/selectors';
import { addRefTgLink } from '../../redux/operations';
import { AppDispatch } from '../../redux/store.ts';
import { ClipLoader } from 'react-spinners';

const TelegramLinkForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector(selectUserId);
  const refLink = useSelector(selectRefLink);
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState(refLink || '');
  const [isSubmitted, setIsSubmitted] = useState(!!refLink);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!link || isSubmitted) return;
    setIsLoading(true);
    try {
      await dispatch(addRefTgLink({ userId, link })).unwrap();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit link:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 grid grid-cols-[4fr_1fr] gap-3 items-center w-full px-7"
    >
      <input
        type="text"
        value={link}
        onChange={(e) => !isSubmitted && setLink(e.target.value)}
        className={`${s.font} text-sm rounded-3xl px-5 py-1 w-full`}
        disabled={isSubmitted}
        placeholder="Enter your Telegram link"
      />
      {isSubmitted ? (
        <span className="text-green-500 text-2xl px-5">✅</span>
      ) : isLoading ? (
        <div className="flex items-center justify-center w-[70px]">
          <ClipLoader size={15} color={'#ededed'} />
        </div>
      ) : (
        <button
          type="submit"
          className="btn btn-outline btn-sm rounded-3xl px-5 py-4"
          disabled={!link}
        >
          Done
        </button>
      )}
    </form>
  );
};

export default TelegramLinkForm;
