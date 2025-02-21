// import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Modal from '../Modal/Modal.tsx';

const AddBoosts = () => {
  // const { t } = useTranslation();
  const [isModalOpenAddBoosts, setIsModalAddOpenBoosts] = useState(false);

  return (
    <div>
      <button
        className="btn py-4 px-14 mr-5 btn-primary rounded-4xl "
        onClick={() => setIsModalAddOpenBoosts(true)}
      >
        + Add boosts
      </button>

      <Modal
        isOpen={isModalOpenAddBoosts}
        changeModal="addBoosts"
        onClose={() => setIsModalAddOpenBoosts(false)}
      />
    </div>
  );
};

export default AddBoosts;
