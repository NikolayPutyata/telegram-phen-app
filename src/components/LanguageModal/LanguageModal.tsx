import { useTranslation } from 'react-i18next';
import s from '/src/App.module.css';

interface LanguageModalProps {
  onClose: () => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({ onClose }) => {
  const { i18n } = useTranslation();

  const languages = [
    {
      code: 'en',
      name: 'English',
      src: '/assets/language/english.svg',
    },
    {
      code: 'es',
      name: 'Español',
      src: '/assets/language/espanol.svg',
    },
    {
      code: 'de',
      name: 'Deutsch',
      src: '/assets/language/deutsch.svg',
    },
    {
      code: 'fr',
      name: 'Français',
      src: '/assets/language/francais.svg',
    },
    {
      code: 'it',
      name: 'Italiano',
      src: '/assets/language/italiano.svg',
    },
    { code: 'pl', name: 'Polski', src: '/assets/language/polski.svg' },
    {
      code: 'zh',
      name: '中文 (简体)',
      src: '/assets/language/chinese.svg',
    },
    {
      code: 'ko',
      name: '한국어',
      src: '/assets/language/korean.svg',
    },
    {
      code: 'ja',
      name: '日本語',
      src: '/assets/language/japanese.svg',
    },
    {
      code: 'hi',
      name: 'हिन्दी',
      src: '/assets/language/hindi.svg',
    },
    {
      code: 'ar',
      name: 'العربية',
      src: '/assets/language/arabic.svg',
    },
  ];
  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    onClose();
  };

  return (
    <div className="p-6 flex-col flex items-center">
      <div className="flex justify-center items-center gap-1 mb-3">
        <h2 className={`${s.font} text-zinc-300 text-xl tracking-wider`}>
          Select Language
        </h2>
        <div className="w-6 h-6 flex justify-center items-end">
          <img src="/assets/language/language.svg" className="w-5 h-5" />
        </div>
      </div>
      <ul>
        {languages.map(({ code, name, src }) => (
          <li
            key={code}
            className={`p-2 ${s.font} tracking-wider flex gap-2 text-lg ${
              i18n.language === code
                ? `mb-2 text-zinc-100 tracking-wider`
                : 'text-zinc-400'
            }`}
            onClick={() => handleLanguageChange(code)}
          >
            <img src={src} className="mr-1 w-7 h-7" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageModal;
