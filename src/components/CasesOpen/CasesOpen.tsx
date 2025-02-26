import { useState } from 'react';
import CasesModal from '../CasesModal/CasesModal.tsx';

const CasesOpen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open Case</button>
      <CasesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CasesOpen;
