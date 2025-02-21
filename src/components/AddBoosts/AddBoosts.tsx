// import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Modal from '../Modal/Modal.tsx';

const AddBoosts = () => {
  // const { t } = useTranslation();
  const [isModalOpenAddBoosts, setIsModalAddOpenBoosts] = useState(false);

  return (
    <>
      <button
        className="btn w-full text-lg bg-transparent border-none text-[#605dff] py-4 "
        onClick={() => setIsModalAddOpenBoosts(true)}
      >
        + Add boosts
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
