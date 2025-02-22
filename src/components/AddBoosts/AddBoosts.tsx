// import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Modal from '../Modal/Modal.tsx';
import s from '/src/App.module.css';

const AddBoosts = () => {
  // const { t } = useTranslation();
  const [isModalOpenAddBoosts, setIsModalAddOpenBoosts] = useState(false);

  return (
    <>
      <button
        className="w-full text-lg mt-2 text-[#605dff] "
        onClick={() => setIsModalAddOpenBoosts(true)}
      >
        <p className={`${s.font} text-zinc-300 tracking-wider text-sm`}>
          + Add boosts
        </p>
      </button>

      <Modal
        isOpen={isModalOpenAddBoosts}
        changeModal="addBoosts"
        onClose={() => setIsModalAddOpenBoosts(false)}
      />
    </>
  );
};

export default AddBoosts;
