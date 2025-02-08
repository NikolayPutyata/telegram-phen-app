import SkinsModal from '../SkinsModal/SkinsModal.tsx';
import BoostsModal from '../BoostsModal/BoostsModal.tsx';
import TasksModal from '../TasksModal/TasksModal.tsx';
import SettingsModal from '../SettingsModal/SettingsModal.tsx';
import LanguageModal from '../LanguageModal/LanguageModal.tsx';
import s from '/src/App.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  changeModal: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, changeModal }) => {
  const renderModalContent = () => {
    switch (changeModal) {
      case 'boosts':
        return <BoostsModal />;
      case 'skins':
        return <SkinsModal />;
      case 'tasks':
        return <TasksModal />;
      case 'settings':
        return <SettingsModal />;
      case 'language':
        return <LanguageModal />;
      default:
        return (
          <p className={`${s.font} text-zinc-300 tracking-wider`}>No content</p>
        );
    }
  };

  return (
    <dialog id="my_modal_3" className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <form method="dialog">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>

        {renderModalContent()}
      </div>
    </dialog>
  );
};

export default Modal;
