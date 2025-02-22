import SkinsModal from '../SkinsModal/SkinsModal.tsx';
import BoostsModal from '../BoostsModal/BoostsModal.tsx';
import SettingsModal from '../SettingsModal/SettingsModal.tsx';
import LanguageModal from '../LanguageModal/LanguageModal.tsx';
import ModalAddBoosts from '../ModalAddBoosts/ModalAddBoosts.tsx';
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
      case 'settings':
        return <SettingsModal />;
      case 'language':
        return <LanguageModal onClose={onClose} />;
      case 'addBoosts':
        return <ModalAddBoosts onClose={onClose} />;
      default:
        return (
          <p className={`${s.font} text-zinc-300 tracking-wider`}>No content</p>
        );
    }
  };

  return (
    <dialog
      id="my_modal_3"
      className={`modal ${isOpen ? 'modal-open' : ''}`}
      onClick={onClose}
    >
      <div className="modal-box relative" onClick={(e) => e.stopPropagation()}>
        <form method="dialog">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-4 z-10 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>

        <div className="max-h-[70vh] overflow-y-auto mt-3">
          {renderModalContent()}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
