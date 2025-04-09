import { useState } from 'react';
import CasesModal from '../CasesModal/CasesModal.tsx';
import { useSelector } from 'react-redux';
import { selectCaseBoosts } from '../../redux/selectors';

const CasesOpen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const caseBoosts = useSelector(selectCaseBoosts);

  return (
    <>
      <button className="mt-4" onClick={() => setIsModalOpen(true)}>
        Open Case
      </button>
      <CasesModal
        isOpen={isModalOpen}
        caseBoosts={caseBoosts}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CasesOpen;
