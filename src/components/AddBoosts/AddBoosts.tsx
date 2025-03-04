// import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Modal from '../Modal/Modal.tsx';
import s from '/src/App.module.css';

interface AddBoostsProps {
  isAddBoostsDisabled: boolean;
}

const AddBoosts = ({ isAddBoostsDisabled }: AddBoostsProps) => {
  // const { t } = useTranslation();
  const [isModalOpenAddBoosts, setIsModalAddOpenBoosts] = useState(false);

  return (
    <>
      {isAddBoostsDisabled ? null : 
        <button
        className="w-full text-lg mt-2 text-[#605dff]"
        onClick={() => setIsModalAddOpenBoosts(true)}
        disabled={isAddBoostsDisabled}
      >
        <p
          className={`${s.font} tracking-wider text-sm ${
            isAddBoostsDisabled ? 'text-zinc-500' : 'text-zinc-300'
          }`}
        >
          + Add boosts
        </p>
      </button>
        }

      <Modal
        isOpen={isModalOpenAddBoosts}
        changeModal="addBoosts"
        onClose={() => setIsModalAddOpenBoosts(false)}
      />
    </>
  );
};

export default AddBoosts;
