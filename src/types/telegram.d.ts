
declare global {
  interface TelegramUser {
    id: number;
    username?: string;
    first_name?: string;
    last_name?: string;
    language_code?: string;
    photo_url?: string;
  }

  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void;
        initDataUnsafe: TelegramWebAppData; 
      };
    };
  }
}

export {};
