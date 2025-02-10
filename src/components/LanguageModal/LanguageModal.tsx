import { useTranslation } from 'react-i18next';
import s from '/src/App.module.css';

interface LanguageModalProps {
  onClose: () => void; // Додаємо можливість закрити модалку
}

const LanguageModal: React.FC<LanguageModalProps> = ({ onClose }) => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'it', name: 'Italiano' },
    { code: 'pl', name: 'Polski' },
  ];
  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code); // Міняємо мову
    onClose(); // Закриваємо модалку
  };

  return (
    <div className="p-6 flex-col flex items-center">
      <h2 className={`${s.font} text-zinc-300 text-xl tracking-wider mb-3`}>
        Select Language
      </h2>
      <ul>
        {languages.map(({ code, name }) => (
          <li
            key={code}
            className={`p-2 ${s.font} tracking-wider  text-zinc-300 text-lg ${
              i18n.language === code ? `mb-2 text-zinc-100 tracking-wider` : ''
            }`}
            onClick={() => handleLanguageChange(code)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageModal;
