import { useState } from 'react';
import Modal from '../Modal/Modal.tsx';

const CasesOpen = () => {
  const [isModalOpenCase, setIsModalOpenCase] = useState(false);

  return (
    <>
      <button
        className="w-full text-lg mt-2 text-[#605dff]"
        onClick={() => setIsModalOpenCase(true)}
        disabled={isModalOpenCase}
      >
        Cases Open
      </button>

      <Modal
        isOpen={isModalOpenCase}
        changeModal="case"
        onClose={() => setIsModalOpenCase(false)}
      />
    </>
  );
};

export default CasesOpen;
