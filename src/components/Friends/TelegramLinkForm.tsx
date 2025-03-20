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
  const [error, setError] = useState<string | null>(null);

  const linkRegex =
    /^https:\/\/t\.me\/phenerium_bot\?start=_tgr_-[A-Za-z0-9]+$/;
  const validateLink = (value: string): boolean => {
    return linkRegex.test(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!link || isSubmitted) return;

    if (!validateLink(link)) {
      setError('Please enter a valid Telegram link');
      setLink('');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      await dispatch(addRefTgLink({ userId, link })).unwrap();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit link:', error);
      setError('Failed to submit. Try again.');
      setLink('');
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
        onChange={(e) => {
          setLink(e.target.value);
          setError(null);
        }}
        className={`${
          s.font
        } disabled:border-gray-600 disabled:text-gray-600 text-sm tracking-wider rounded-3xl px-5 py-1 w-full ${
          error ? ' text-sm placeholder:text-gray-600' : ''
        }`}
        disabled={isSubmitted || isLoading}
        placeholder={error || ''}
      />
      {isSubmitted ? (
        <span className="text-xl flex justify-center">✅</span>
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
